import { getAllCreatures, getCreatureById } from "@/data/creature";
import Image from "next/image";

type CreaturePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const creatures = getAllCreatures();
  return creatures.map((creature: { id: any; }) => ({
    id: creature.id,
  }));
}

export default async function CreaturePage({ params }: CreaturePageProps) {
  const { id } = await params;
  const creature = getCreatureById(id);

  if (!creature) {
    return <div>Creature not found</div>;
  }

  return (
    <div className="px-[20%] py-10 text-white bg-[#00001A] min-h-screen font-sans">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
            <div>
            <h1 className="text-4xl font-bold mb-2">{creature.commonName}</h1>
            <p className="italic text-lg mb-4">{creature.scientificName}</p>

            <p className="text-base leading-relaxed mb-6">
                {creature.description}
            </p>

            <div className="space-y-2 text-sm">
                <p>
                <span className="font-semibold">Depth:</span>{" "}
                {creature.depth}
                </p>
                <p>
                <span className="font-semibold">Range:</span>{" "}
                {creature.range}
                </p>
                <p>
                <span className="font-semibold">Habitat:</span>{" "}
                {creature.habitat}
                </p>
            </div>
            </div>

            <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow">
                <Image src={creature.image} alt={creature.commonName} className="w-full h-auto object-cover" width={300} height={300}/>
            </div>
            </div>
        </div>
    </div>
  );
}
