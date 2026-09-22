#!/usr/bin/env node
/**
 * Placeholder-photography helper. Searches Openverse (Flickr, Wikimedia,
 * Rawpixel… — only licenses that allow commercial use) and optionally
 * downloads one result.
 *
 *   node scripts/find-images.mjs search "string lights backyard night" [--n 20] [--source wikimedia]
 *   node scripts/find-images.mjs get <openverse-id> apps/<app>/public/images/<name>.jpg
 *
 * `get` appends an attribution line to apps/<app>/public/images/CREDITS.md —
 * CC-BY / BY-SA require it. Every image fetched this way is a PLACEHOLDER
 * until the client supplies real photography.
 */
import { writeFile, appendFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join, basename } from "node:path";

const API = "https://api.openverse.org/v1/images/";
const [cmd, ...rest] = process.argv.slice(2);

function flag(name, fallback) {
  const i = rest.indexOf(`--${name}`);
  return i >= 0 ? rest[i + 1] : fallback;
}

if (cmd === "search") {
  const q = rest[0];
  const params = new URLSearchParams({ q, license_type: "commercial", page_size: flag("n", "20") });
  const src = flag("source");
  if (src) params.set("source", src);
  const res = await fetch(`${API}?${params}`);
  const data = await res.json();
  if (!data.results) { console.error(data); process.exit(1); }
  for (const r of data.results) {
    console.log([r.id, `${r.width ?? "?"}x${r.height ?? "?"}`, r.license, r.source, r.url, (r.title || "").slice(0, 60)].join("  "));
  }
} else if (cmd === "get") {
  const [id, out] = rest;
  const meta = await (await fetch(`${API}${id}/`)).json();
  // Flickr: try the 2048px (_k) / 1600px (_h) rendition before the 1024px (_b) one the API returns.
  const candidates = [meta.url];
  if (meta.source === "flickr" && /_b\.jpg$/.test(meta.url)) {
    candidates.unshift(meta.url.replace(/_b\.jpg$/, "_h.jpg"));
  }
  let buf;
  for (const u of candidates) {
    const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 svg-sites" } });
    if (r.ok && !r.url.includes("photo_unavailable")) { buf = Buffer.from(await r.arrayBuffer()); if (buf.length > 20000) break; }
  }
  if (!buf) { console.error("download failed", candidates); process.exit(1); }
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  const credits = join(dirname(out).replace(/(public\/images).*/, "$1"), "CREDITS.md");
  let existing = "";
  try { existing = await readFile(credits, "utf8"); } catch { existing = "# Photo credits (placeholders)\n\nAll images below are temporary, freely-licensed placeholders until the client supplies real photography.\n\n"; await writeFile(credits, existing); }
  const line = `- \`${out.split("public/")[1]}\` — "${meta.title}" by ${meta.creator ?? "unknown"} (${meta.license.toUpperCase()} ${meta.license_version ?? ""}) — ${meta.foreign_landing_url}\n`;
  if (!existing.includes(basename(out))) await appendFile(credits, line);
  console.log(`saved ${out} (${Math.round(buf.length / 1024)} KB)`);
} else {
  console.log("usage: search <query> | get <id> <out>");
}
