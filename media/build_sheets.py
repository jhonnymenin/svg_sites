"""Build numbered contact sheets for every photo in the SGV Marketing drop.
catalog.json maps id -> source path + size, so curators can pick by id."""
import glob, json, os, sys
from multiprocessing import Pool
from PIL import Image, ImageDraw, ImageOps, ImageFont
Image.MAX_IMAGE_PIXELS = None
SRC = os.environ.get("SGV_MEDIA_SRC", "/Users/jhonnymenin/Documents/On Educação/On Digital/CLIENTES/Serving Good Vibes/SGV Marketing")
OUT = os.path.join(os.path.dirname(__file__), "sheets")
TW, TH, COLS, ROWS = 300, 225, 6, 5

def group(p):
    parts = p.split("/")
    # group = first two meaningful folders (e.g. "SGV Event Photos/Sugar Jam 3.21.26")
    return "/".join(parts[:2]) if len(parts) > 2 else parts[0]

def thumb(args):
    i, p = args
    try:
        im = Image.open(os.path.join(SRC, p)); im = ImageOps.exif_transpose(im)
        w, h = im.size
        im.draft("RGB", (TW * 2, TH * 2)); im = im.convert("RGB"); im.thumbnail((TW, TH - 16))
        return i, im, w, h
    except Exception as e:
        return i, None, 0, 0

if __name__ == "__main__":
    files = sorted(f for f in glob.glob("**/*", root_dir=SRC, recursive=True)
                   if f.lower().endswith((".jpg", ".jpeg", ".png", ".avif")) and "SGV Logos" not in f and "_Logo" not in f and "Logos" not in f)
    with Pool(10) as pool:
        res = pool.map(thumb, list(enumerate(files)), chunksize=8)
    catalog = []
    groups = {}
    for (i, im, w, h), p in zip(res, files):
        catalog.append(dict(id=i, path=p, w=w, h=h, group=group(p)))
        if im: groups.setdefault(group(p), []).append((i, im, w, h))
    json.dump(catalog, open(os.path.join(os.path.dirname(__file__), "catalog.json"), "w"), indent=0)
    font = ImageFont.load_default(size=15)
    index = []
    for g, items in groups.items():
        slug = g.replace("/", "__").replace(" ", "_").replace("@", "at").replace("!", "")
        per = COLS * ROWS
        for s in range(0, len(items), per):
            chunk = items[s:s + per]
            rows = (len(chunk) + COLS - 1) // COLS
            sheet = Image.new("RGB", (COLS * TW, rows * TH), (24, 24, 24))
            d = ImageDraw.Draw(sheet)
            for k, (i, im, w, h) in enumerate(chunk):
                x, y = (k % COLS) * TW, (k // COLS) * TH
                sheet.paste(im, (x + (TW - im.width) // 2, y))
                d.text((x + 4, y + TH - 17), f"#{i}  {w}x{h}", fill=(255, 220, 90), font=font)
            name = f"{slug}__{s // per + 1:02d}.jpg"
            sheet.save(os.path.join(OUT, name), quality=82)
            index.append(f"{name}: {g} ({len(chunk)} imgs)")
    open(os.path.join(OUT, "INDEX.txt"), "w").write("\n".join(index))
    print(len(files), "images,", len(index), "sheets")
