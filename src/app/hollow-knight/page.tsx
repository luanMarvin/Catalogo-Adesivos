"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../public/images/inkanto.png";


//Editables
const name = "HK";
const imgfolder = 'hollowk';
const images = [
"GRIMM 01.png",
"GRIMM 02.jpg",
"HORNET 01.jpg",
"HORNET 02.jpg",
"KNIGHT 01.jpg",
"KNIGHT 02.jpg",
"RADIANCE 01.jpg"
];

export default function HollowKnight() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0e0e11] text-white">
      <header className="flex items-center gap-4 px-4 py-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-[#18181d] border border-white/10 hover:bg-white/10 transition">
          Voltar
        </Link>
        <Image src={Logo} alt="Inkanto" className="w-28 sm:w-36 mx-auto" />
      </header>

      <section className="px-4 py-6 grid grid-cols-2 md:grid-cols-10 gap-3">
        {images.map((img) => (
          <div key={img} onClick={() => setSelected(img)} className="cursor-pointer bg-[#18181d] rounded-lg p-2 hover:scale-105 transition"
          >
            <Image src={`/images/${imgfolder}/${img}`} alt={img} width={300} height={300} className="rounded-md"/>
            <p className="mt-2 text-xs sm:text-sm text-center opacity-80">
              {img.split('.').slice(0, -1).join('.')}
            </p>
          </div>
        ))}
      </section>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
        >
          <div className="max-w-3xl w-full bg-[#18181d] rounded-2xl">
            <Image src={`/images/${imgfolder}/${selected}`} alt={selected} width={300} height={300} className="rounded-xl mx-auto "/>
            <p className="mt-4 text-center text-lg">
              {name} {selected.split('.').slice(0, -1).join('.')}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
