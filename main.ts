// Round 2 resubmit: the keeper's log ends with a ship that should not exist — bearing his own name, arriving at dawn.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Every night the lighthouse keeper logged the ships that never came. On the last page, in his own handwriting, was a ship he had never seen — arriving at dawn, with his name painted on its hull.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
