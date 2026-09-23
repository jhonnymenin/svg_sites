"""Frame sheets for videos: long films sampled every N s; short clips one mid frame each."""
import json, os, subprocess, glob
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageDraw, ImageFont
SRC = os.path.expanduser("~/Downloads/SGV Marketing"); HERE = os.path.dirname(os.path.abspath(__file__))
FR = os.path.join(HERE, ".frames"); OUT = os.path.join(HERE, "vsheets")
font = ImageFont.load_default(size=15)
vids = json.load(open(os.path.join(HERE, "videos.json")))
for i, v in enumerate(vids): v["id"] = i
json.dump(vids, open(os.path.join(HERE, "videos.json"), "w"), indent=0)

def grab(path, t, out, w=320):
    if os.path.exists(out): return out
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", os.path.join(SRC, path), "-frames:v", "1", "-vf", f"scale={w}:-2", out])
    return out

def sheet(items, name, tw=320, cols=6):
    ims = [(lbl, Image.open(p)) for lbl, p in items if os.path.exists(p)]
    if not ims: return
    th = max(im.height for _, im in ims) + 18; rows = (len(ims) + cols - 1) // cols
    s = Image.new("RGB", (cols * tw, rows * th), (24, 24, 24)); d = ImageDraw.Draw(s)
    for k, (lbl, im) in enumerate(ims):
        x, y = (k % cols) * tw, (k // cols) * th
        im.thumbnail((tw, th - 18)); s.paste(im, (x + (tw - im.width) // 2, y)); d.text((x + 4, y + th - 17), lbl, fill=(255, 220, 90), font=font)
    s.save(os.path.join(OUT, name), quality=82)

jobs = []
long = [v for v in vids if v["dur"] > 30]
for v in long:
    step = max(2.0, v["dur"] / 60)
    ts = [step * k + 0.5 for k in range(int(v["dur"] / step))]
    v["frames"] = [(f"v{v['id']} t={t:.0f}s", os.path.join(FR, f"v{v['id']}_{int(t*10)}.jpg"), t) for t in ts]
    jobs += [(v["f"], t, p) for _, p, t in v["frames"]]
short = [v for v in vids if v["dur"] <= 30]
for v in short:
    p = os.path.join(FR, f"v{v['id']}_mid.jpg"); v["frame"] = p; jobs.append((v["f"], v["dur"] / 2, p))
with ThreadPoolExecutor(10) as ex:
    list(ex.map(lambda j: grab(j[0], j[1], j[2]), jobs))
index = []
for v in long:
    name = f"LONG_v{v['id']}.jpg"; sheet([(l, p) for l, p, _ in v["frames"]], name)
    index.append(f"{name}: v{v['id']} {v['w']}x{v['h']} {v['dur']:.0f}s {v['f']}")
groups = {}
for v in short: groups.setdefault(v["f"].rsplit("/", 1)[0], []).append(v)
for g, vs in groups.items():
    vs.sort(key=lambda v: (v["h"] > v["w"], v["id"]))
    for s in range(0, len(vs), 36):
        name = "CLIPS_" + (g.split("/")[-2] if g.count("/") >= 3 else g.split("/")[1]).replace(" ", "_").replace("@", "at").replace("!", "") + f"__{s//36+1:02d}.jpg"
        sheet([(f"v{v['id']} {'H' if v['w']>v['h'] else 'V'} {v['dur']:.0f}s", v["frame"]) for v in vs[s:s+36]], name)
        index.append(f"{name}: {g} ({len(vs[s:s+36])} clips)")
open(os.path.join(OUT, "INDEX.txt"), "w").write("\n".join(index)); print("\n".join(index))
