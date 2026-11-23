// A new key, and no lock for it.
import fs from "node:fs";

const entry = "Every morning she finds a different key in her coat pocket. None of them fits any lock she owns. Today the key is warm. A tiny tag is tied to it, with an address she has never seen. She stands at her door, key in her hand, coat still on.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", entry);
