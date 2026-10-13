// Renders design/banners.html into public/images/banners/*.png using headless Edge/Chrome.
// Usage: node design/render-banners.mjs   (set BROWSER=path\to\chrome.exe to override)
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/images/banners");
mkdirSync(out, { recursive: true });

const browser =
  process.env.BROWSER ?? "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const page = pathToFileURL(resolve(here, "banners.html")).href;

const sizes = { desktop: [1920, 720], mobile: [900, 720] };

// Optional args pick banners, e.g. `node design/render-banners.mjs 4 5 6`
const which = process.argv.slice(2).map(Number);
for (const n of which.length ? which : [1, 2, 3, 4, 5, 6]) {
  for (const [name, [w, h]] of Object.entries(sizes)) {
    const file = resolve(out, `banner-${n}-${name}.png`);
    execFileSync(browser, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      `--window-size=${w},${h}`,
      "--virtual-time-budget=5000",
      `--screenshot=${file}`,
      `${page}#${n}`,
    ], { stdio: "ignore" });
    console.log("rendered", file);
  }
}
