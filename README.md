# Serving Good Vibes — sites

Monorepo for the Serving Good Vibes family of websites.

```
apps/
  social-entertainment   Social Entertainment — parent company        :3001
  serving-good-vibes     Serving Good Vibes — masterbrand hub         :3002
  braziliana             Braziliana — culture & community arm         :3003
  chez-la-fete           Chez La Fête — Lafayette guest house & venue :3004
  villa-bo               Villa BO — boutique stay in Jardins, SP      :3005
packages/
  brand                  Shared SGV lockup + motion primitives
references/              Approved mockups and copy specs
```

```bash
npm install
npm run dev            # every site
npm run dev:chez       # one site
npm run build          # build all (Turborepo)
```

## Deploy

Each app deploys as its own project (Vercel: one project per app with **Root Directory** set to `apps/<name>`; Cloudflare: same, via OpenNext). The shared package is transpiled by Next (`transpilePackages`), so no separate build step is needed.
