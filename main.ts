import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Every morning she opened the drawer and counted the stones. Six. Always six, though she never put one in and never took one out. This morning there were seven. The seventh was warm, as if it had just arrived.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
