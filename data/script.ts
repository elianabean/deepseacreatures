import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "csv-parse/sync";

export type Creature = {
  id: string;
  commonName: string;
  scientificName: string;
  size: string;
  depth: string;
  range: string;
  habitat: string;
  image: string;
  description: string;
};

type CreatureKey = keyof Creature;

const REQUIRED_COLUMNS: CreatureKey[] = [
  "id",
  "commonName",
  "scientificName",
  "size",
  "depth",
  "range",
  "habitat",
  "image",
  "description",
];

const csvText = readFileSync("creatures.csv", "utf8");

const rows = parse(csvText, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
  bom: true,
});

//map to Creature[]

const creatures: Creature[] = rows.map((r: Record<string, unknown>, i: number) => {
  const obj: Partial<Creature> = {};
  for (const key of REQUIRED_COLUMNS) obj[key] = String(r[key] ?? "").trim();

  if (!obj.id) throw new Error(`Row ${i + 2}: id is empty`); // +2 because header is row 1
  return obj as Creature;
});

// Write a TS module you can import
const out = `import type { Creature } from "../src/types";\n\nexport const CREATURES: Creature[] = ${JSON.stringify(
  creatures,
  null,
  2
)};\n`;

writeFileSync("src/data/creatures.ts", out, "utf8");
console.log(`Wrote ${creatures.length} creatures to src/data/creatures.ts`);