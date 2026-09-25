// Viewport screenshots down a page at fixed steps, to see pinned and moving sections as a visitor
// does: `node scripts/walk.mjs <out> <path> [width] [step]`.
import { chromium } from "playwright"

const [out, path = "/", width = "1440", step = "900"] = process.argv.slice(2)
const browser = await chromium.launch({ channel: "chrome" })
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 } })
await page.goto(`http://localhost:4321${path}`, { waitUntil: "networkidle" })
const height = await page.evaluate(() => document.body.scrollHeight)
console.log("height", height, "overflow", await page.evaluate(() => document.documentElement.scrollWidth - innerWidth))
let i = 0
for (let y = 0; y < height; y += Number(step)) {
  await page.mouse.wheel(0, y === 0 ? 0 : Number(step))
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${out}/walk-${width}-${String(i++).padStart(2, "0")}.png` })
}
await browser.close()
