import Image from "next/image";
import "./globals.css";
import Orbs from "./components/orbs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00001A] flex flex-col items-center justify-center relative overflow-hidden">
      <Orbs />
      <h1 className="relative z-10 text-4xl font-bold mb-8 text-white">
        Deep Sea Creatures
      </h1>
    </div>
  );
}
