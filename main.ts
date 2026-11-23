// The keeper's log holds one line he does not remember writing.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Every night, Elias wrote down the ships that never came. Name, time, sea. He kept the log beside the lamp. On the last page he found a line in his own hand: a ship called Elias, arriving at dawn. He had never seen it. He had never written it. He sat and waited for morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
