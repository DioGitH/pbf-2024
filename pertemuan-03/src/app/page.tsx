import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <h1>Ilmuwan yang luar biasa</h1>
      </div>
      <div className="flex justify-between">
        <Gallery />
      </div>
    </main>
    
  );
}
