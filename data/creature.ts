import creaturesData from "./creatures.json";

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
export const creatures: Creature[] = creaturesData as Creature[];


export function getAllCreatures() {
  return creatures;
}

export function getCreatureById(id: string) {
  return creatures.find((c) => c.id === id);
}