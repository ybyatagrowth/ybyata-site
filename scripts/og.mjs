// The link preview image (public/og.png): the home page's hero at 1200×630.
import { chromium } from "playwright"

const browser = await chromium.launch({ channel: "chrome" })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.goto("http://localhost:4321/", { waitUntil: "networkidle" })
await page.addStyleTag({ content: "[data-header]{display:none} .grain::before{display:none} section:first-of-type{padding-top:96px!important} section:first-of-type p.mt-7, section:first-of-type div.mt-9{display:none!important}" })
await page.evaluate(() => document.querySelectorAll("[data-reveal],[data-draw],[data-count]").forEach((el) => el.classList.add("is-in")))
await page.waitForTimeout(2600)
await page.screenshot({ path: "public/og.png" })
await browser.close()
