// The last page of the keeper's log holds a ship that was never there — in his own handwriting, due at dawn.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Each night the keeper wrote down the ships that never came. The lamp burned low and the sea stayed empty. Near dawn he turned to the last page and found a ship he had never seen, written in his own hand, coming in with the light, his name on its hull. He had not written it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
