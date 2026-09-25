// Every page at desktop and phone width: no sideways scroll, no broken image, every internal link
// answers. Run against `pnpm preview --port 4321`.
import { chromium } from "playwright"

const base = "http://localhost:4321"
const pages = ["/", "/plataforma", "/gestao-comercial", "/politica-de-privacidade", "/termos-de-uso", "/exclusao-de-dados", "/google-ads-api",
  "/en/", "/en/platform", "/en/commercial-management", "/en/privacy", "/en/terms", "/en/data-deletion"]
const browser = await chromium.launch({ channel: "chrome" })
let problems = 0
const links = new Set()
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  for (const path of pages) {
    const response = await page.goto(base + path, { waitUntil: "networkidle" })
    if (!response?.ok()) { console.log("PAGE", response?.status(), path); problems++ }
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)) } })
    await page.waitForTimeout(400)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    const broken = await page.evaluate(() => [...document.images].filter((i) => i.complete && !i.naturalWidth).map((i) => i.getAttribute("src")))
    if (overflow > 0 || broken.length) { console.log(width, path, "overflow", overflow, "broken", broken); problems++ }
    for (const href of await page.$$eval("a[href]", (as) => as.map((a) => a.href))) if (href.startsWith(base)) links.add(href.split("#")[0])
    for (const src of await page.$$eval("video source", (s) => s.map((x) => x.src))) links.add(src)
  }
  await page.close()
}
for (const href of links) {
  const r = await fetch(href)
  if (!r.ok) { console.log("LINK", r.status, href); problems++ }
}
console.log(`${pages.length} pages, ${links.size} links and media checked, ${problems} problems`)
await browser.close()
process.exit(problems ? 1 : 0)
