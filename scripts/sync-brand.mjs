#!/usr/bin/env node
// Copies the official brand artwork (packages/brand/assets) into every app's
// public/brand/ so each Next app can serve it. Runs automatically before
// `dev` and `build` in every app (predev/prebuild); the copies are gitignored.
import { cpSync, readdirSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const src = join(root, "packages/brand/assets");
for (const app of readdirSync(join(root, "apps"))) {
  const pub = join(root, "apps", app, "public");
  if (!existsSync(pub)) continue;
  rmSync(join(pub, "brand"), { recursive: true, force: true });
  // Only web formats ship; the PNG masters stay in packages/brand/assets.
  cpSync(src, join(pub, "brand"), { recursive: true, filter: (f) => !f.endsWith(".png") });
  console.log(`synced brand assets → apps/${app}/public/brand`);
}
