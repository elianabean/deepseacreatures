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

export const creatures: Creature[] = [
  {
    id: "abyssal-comb-jelly",
    commonName: "Abyssal comb jelly",
    scientificName: "Beroe abyssicola",
    size: "7cm",
    depth: "surface–2,800 m",
    range: "Arctic Ocean and northern Pacific Ocean",
    habitat: "Midwater",
    image: "/images/abyssal comb jelly.jpg",
    description:
      "Its pink color helps it camouflage by absorbing bioluminescence by prey."
  },
  {
    id: "bloody-belly-comb-jelly",
    commonName: "Bloody-belly comb jelly",
    scientificName: "Lampocteis cruentiventer",
    size: "16cm",
    depth: "250–1,500 m",
    range: "North Pacific Ocean",
    habitat: "Midwater",
    image: "/images/bloody-belly comb jelly.jpg",
    description:
      "Its red stomach hides the glowing prey inside (to hide from predators)."
  },
  {
    id: "silky-jelly",
    commonName: "Silky Jelly",
    scientificName: "Colobonema sericeum",
    size: "4.5 cm",
    depth: "200–700 m",
    range: "Pacific, Atlantic, and Indian Ocean",
    habitat: "Midwater",
    image: "/images/silky jelly.jpg",
    description:
      "It is one of the fastest swimming jellies. They are very good at escaping. They have stinging cells (nematocysts) that capture prey and make them unappetizing. The bell of the jelly can radiate blue light to startle predators. When threatened, the bell transforms shape into a tube shape and its tentacles straighten to be able to propel itself forward. They drop sticky tentacles to confuse predators as they flee."
  },
  {
    id: "glass-squid",
    commonName: "Glass Squid",
    scientificName: "family Cranchiidae",
    depth: "surface–2,000 m",
    size: "2m",
    range: "Worldwide",
    habitat: "Midwater",
    image: "/images/glass squid.jpg",
    description:
      "They are covered in tiny pigment sacs called chromatophores, which when closed, makes their skin translucent. They have buoyant bodies because they have a large sac filled with ammonium (lighter than seawater). Their opaque body parts, like their eyes, glow at the same intensity as the sunlight through the water to hide them. This is possible because they have special light organs called photophores. They have large eyes and extremely good eyesight."
  },
];

export function getAllCreatures() {
  return creatures;
}

export function getCreatureById(id: string) {
  return creatures.find((c) => c.id === id);
}