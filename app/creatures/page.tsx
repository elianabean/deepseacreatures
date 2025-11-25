// app/creatures/page.tsx
import Link from "next/link";
import { getAllCreatures } from "@/data/creature";

export default function CreaturesGalleryPage() {
  const creatures = getAllCreatures();

  return (
    <div className="min-h-screen font-sans bg-[#00001A] flex flex-col justify-left px-10 py-10">
      <h1 className="text-4xl font-bold mb-6 text-white">Deep Sea Creature Gallery</h1>
      <p className="mb-8 text-base text-white">
        Click a creature to learn more!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {creatures.map((creature) => (
          <Link key={creature.id} href={`/creatures/${creature.id}`}>
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={creature.image}
                  alt={creature.commonName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h2 className="font-semibold text-lg text-white">
                  {creature.commonName}
                </h2>
                <p className="text-sm italic text-white">
                  {creature.scientificName}
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Depth: {creature.depth}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
