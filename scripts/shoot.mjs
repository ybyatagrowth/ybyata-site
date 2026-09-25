// Screenshots of the built site at desktop and phone widths, for checking a change by eye:
// `pnpm build && pnpm preview --port 4321` in one terminal, `node scripts/shoot.mjs <out> [paths…]`.
import { chromium } from "playwright"

const [out = "shots", ...paths] = process.argv.slice(2)
const pages = paths.length ? paths : ["/", "/en/"]
const browser = await chromium.launch({ channel: "chrome" })
for (const [tag, viewport] of [["desktop", { width: 1440, height: 900 }], ["phone", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport })
  for (const path of pages) {
    await page.goto(`http://localhost:4321${path}`, { waitUntil: "networkidle" })
    const name = path.replace(/\W+/g, "_") || "_"
    // Scroll through so every reveal fires, then back to the top for the full-page shot.
    const height = await page.evaluate(() => document.body.scrollHeight)
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((to) => window.scrollTo(0, to), y)
      await page.waitForTimeout(60)
    }
    await page.waitForTimeout(900)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    const broken = await page.evaluate(() => [...document.images].filter((i) => i.complete && !i.naturalWidth).map((i) => i.getAttribute("src")))
    console.log(tag, path, "overflow", overflow, "broken", broken)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(300)
    await page.screenshot({ path: `${out}/${tag}${name}top.png` })
    await page.screenshot({ path: `${out}/${tag}${name}full.png`, fullPage: true })
  }
  await page.close()
}
await browser.close()
