// The site's motion, in one place. Everything here is decoration: the page reads the same without
// it, and none of it runs for someone who asked their system for less motion.

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
document.documentElement.classList.add("js")

// The header gains a background once the page moves under it.
const header = document.querySelector<HTMLElement>("[data-header]")
const onScrollHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12)
onScrollHeader()
window.addEventListener("scroll", onScrollHeader, { passive: true })

// Reveal: elements with [data-reveal] rise into place the first time they're seen; lines with
// [data-draw] draw themselves.
const seen = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add("is-in")
      seen.unobserve(entry.target)
    }
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
)
document.querySelectorAll("[data-reveal], [data-draw], [data-count]").forEach((el) => seen.observe(el))

// Numbers that count up to their value once in view: data-count="191.64" data-prefix="R$".
const counters = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue
    counters.unobserve(entry.target)
    const el = entry.target as HTMLElement
    const target = Number(el.dataset.count)
    const decimals = Number(el.dataset.decimals ?? 0)
    const format = new Intl.NumberFormat(document.documentElement.lang, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
    const write = (value: number) => (el.textContent = `${el.dataset.prefix ?? ""}${format.format(value)}${el.dataset.suffix ?? ""}`)
    if (reduced) { write(target); continue }
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1400)
      write(target * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }
}, { threshold: 0.6 })
document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el))

// Steps that stay pinned while their media changes: the step nearest the middle of the screen is
// the active one, and the panel shows its media.
document.querySelectorAll<HTMLElement>("[data-steps]").forEach((root) => {
  const steps = [...root.querySelectorAll<HTMLElement>("[data-step]")]
  const panes = [...root.querySelectorAll<HTMLElement>("[data-pane]")]
  const activate = (index: number) => {
    steps.forEach((s, i) => s.classList.toggle("is-active", i === index))
    panes.forEach((p, i) => p.classList.toggle("is-active", i === index))
    root.style.setProperty("--progress", String(index / Math.max(1, steps.length - 1)))
  }
  activate(0)
  // The step whose middle is nearest the middle of the screen, so one is always active.
  let current = 0
  const pick = () => {
    const middle = window.innerHeight / 2
    let best = 0
    let distance = Infinity
    steps.forEach((step, i) => {
      const box = step.getBoundingClientRect()
      const d = Math.abs(box.top + box.height / 2 - middle)
      if (d < distance) { distance = d; best = i }
    })
    if (best !== current) { current = best; activate(best) }
  }
  window.addEventListener("scroll", () => requestAnimationFrame(pick), { passive: true })
  pick()
})

if (!reduced) {
  // Parallax and the sideways strip, recomputed once per frame while scrolling.
  const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")]
  const strips = [...document.querySelectorAll<HTMLElement>("[data-hscroll]")]
  const spreads = [...document.querySelectorAll<HTMLElement>("[data-spread]")]
  let queued = false
  const frame = () => {
    queued = false
    const vh = window.innerHeight
    for (const el of layers) {
      const box = (el.parentElement ?? el).getBoundingClientRect()
      if (box.bottom < -vh || box.top > vh * 2) continue
      const offset = (box.top + box.height / 2 - vh / 2) * Number(el.dataset.parallax)
      el.style.translate = `0 ${offset.toFixed(1)}px`
    }
    for (const strip of strips) {
      const track = strip.querySelector<HTMLElement>("[data-track]")
      if (!track || window.innerWidth < 900) { if (track) track.style.translate = ""; continue }
      const box = strip.getBoundingClientRect()
      const travel = box.height - vh
      const p = Math.min(1, Math.max(0, -box.top / Math.max(1, travel)))
      const distance = Math.max(0, track.scrollWidth - strip.clientWidth)
      track.style.translate = `${(-p * distance).toFixed(1)}px 0`
      strip.style.setProperty("--p", p.toFixed(3))
    }
    for (const pile of spreads) {
      const box = pile.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (vh - box.top) / (vh + box.height * 0.3)))
      pile.style.setProperty("--spread", p.toFixed(3))
    }
  }
  const queue = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(frame)
  }
  frame()
  window.addEventListener("scroll", queue, { passive: true })
  window.addEventListener("resize", queue)
}

// Clips play only while on screen, and not at all for reduced motion (their poster shows).
const clips = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const video = entry.target as HTMLVideoElement
    if (entry.isIntersecting && !reduced) video.play().catch(() => {})
    else video.pause()
  }
}, { threshold: 0.35 })
document.querySelectorAll<HTMLVideoElement>("video[data-clip]").forEach((v) => clips.observe(v))
