"""Export curated photos to web-ready JPEGs in media/library/.

  python3 media/export.py <id> <slug> [--max 2400] [--crop x0,y0,x1,y1 (fractions)]

Applies EXIF rotation, sRGB conversion, optional fractional crop, resize to
--max long edge, progressive JPEG q82. Appends/updates media/library/index.json.
"""
import json, os, sys, argparse
from PIL import Image, ImageOps, ImageCms
Image.MAX_IMAGE_PIXELS = None
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.environ.get("SGV_MEDIA_SRC", "/Users/jhonnymenin/Documents/On Educação/On Digital/CLIENTES/Serving Good Vibes/SGV Marketing")
LIB = os.path.join(HERE, "library"); os.makedirs(LIB, exist_ok=True)
ap = argparse.ArgumentParser(); ap.add_argument("id", type=int); ap.add_argument("slug")
ap.add_argument("--max", type=int, default=2400); ap.add_argument("--crop")
a = ap.parse_args()
cat = {c["id"]: c for c in json.load(open(os.path.join(HERE, "catalog.json")))}
src = cat[a.id]["path"]
im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, src)))
icc = im.info.get("icc_profile")
im = im.convert("RGB")
if icc:
    try:
        import io
        im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(icc)), ImageCms.createProfile("sRGB"))
    except Exception: pass
if a.crop:
    x0, y0, x1, y1 = map(float, a.crop.split(","))
    W, H = im.size; im = im.crop((int(x0 * W), int(y0 * H), int(x1 * W), int(y1 * H)))
im.thumbnail((a.max, a.max), Image.LANCZOS)
out = os.path.join(LIB, a.slug + ".jpg")
im.save(out, "JPEG", quality=82, optimize=True, progressive=True)
idx_p = os.path.join(LIB, "index.json")
idx = json.load(open(idx_p)) if os.path.exists(idx_p) else {}
idx[a.slug] = dict(id=a.id, source=src, w=im.width, h=im.height, crop=a.crop)
json.dump(idx, open(idx_p, "w"), indent=1, sort_keys=True)
print(f"{out}  {im.width}x{im.height}  {os.path.getsize(out)//1024}KB")
