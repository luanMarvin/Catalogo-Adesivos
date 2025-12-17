"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../public/images/inkanto.png";

const images = [
  "AHRI 01.png","AHRI 02.png","AHRI 03.png","AKALI 01.png","ALISTAR 01.png",
  "AMUMU 01.png","ANNIE 01.png","ASHE 01.png","AURELION 01.png","AURELION 02.png",
  "AURELION 03.png","AZIR 01.png","BLITZ 01.png","BRAUM 01.png","BRIAR 01.png",
  "CAITLYN 01.png","CAMILLE 01.png","DRAVEN 01.png","DRAVEN 02.png","DRMUNDO 01.png",
  "EKKO 01.png","EVELYNN 01.png","EZREAL 01.png","EZREAL 02.png","EZREAL 03.png",
  "EZREAL 04.png","FIORA 01.png","FIORA 02.png","FIORA 03.png","FIZZ 01.png",
  "FLIDDESTICK 01.png","GANGPLANK 01.png","GANGPLANK 02.png","GAREN 01.png",
  "GNAR 01.png","GRAVES 01.png","GWEN 01.png","GWEN 02.png","HEIMER 01.png",
  "HWEI 01.png","HWEI 02.png","ILLAOI 01.png","IRELIA 01.png","IRELIA 02.png",
  "JAX 01.png","JHIN 01.png","JINX 01.png","JINX 02.png","JINX 03.png",
  "JINX 04.png","JINX 05.png","KAISA 01.png","KARTHUS 01.png","KATARINA 01.png",
  "KAYN 01.png","KENNEN 01.png","KHAZIX 01.png","KINDRED 01.png","KLED 01.png",
  "KSANTE 01.png","LEE SIN 01.png","LEE SIN 02.png","LEONA 01.png","LILLIA 01.png",
  "LUCIAN 01.png","LULU 01.png","LUX 01.png","MILIO.png","MISSFORTUNE 01.png",
  "MORGANA 01.png","NAAFIRI 01.png","NASUS 01.png","NAUTILUS 01.png","NEEKO 01.png",
  "NEEKO 02.png","NEEKO 03.png","NILAH 01.png","NUNU 01.png","NUNU 02.png",
  "NUNU 03.png","ORNN 01.png","POPPY 01.png","POPPY 02.png","POPPY 03.png",
  "PORO 01.png","PYKE 01.png","RAMMUS 01.png","RENEKTON 01.png","RIVEN 01.png",
  "RIVEN 02.png","SENNA 01.png","SENNA 02.png","SERAPHINE 01.png","SETT 01.png",
  "SETT 02.png","SHACO 01.png","SHACO 02.png","SHYVANA 01.png","SHYVANA 02.png",
  "SMOLDER 01.png","SONA 01.png","SORAKA 01.png","SWAIN 01.png","SYLAS 01.png",
  "SYLAS 02.png","SYLAS 03.png","TAHMKENCH 01.png","TALIYAH 01.png","TARIC 01.png",
  "TEEMO 01.png","TEEMO 02.png","THRESH 01.png","TRYNDAMERE.png","TWISTED FATE.png",
  "URGOT 01.png","VAYNE 01.png","VELKOZ 01.png","VEX 01.png","VI 01.png",
  "VI 02.png","VIEGO 01.png","VIEGO 02.png","WARWICK 01.png","WARWICK 02.png",
  "YASUO 01.png","YASUO 02.png","YASUO 03.png","YONE 01.png","YONE 02.png",
  "YUUMI 01.png","YUUMI 02.png","YUUMI 03.png","YUUMI 04.png","ZAC 01.png",
  "ZAC 02.png","ZAC 03.png","ZED 01.png","ZIGGS 01.png","ZOE 01.png","ZOE 02.png"
];

export default function LeagueOfLegends() {
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
            <Image src={`/images/lol/${img}`} alt={img} width={300} height={300} className="rounded-md"/>
            <p className="mt-2 text-xs sm:text-sm text-center opacity-80">
              {img.replace(".png", "")}
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
            <Image src={`/images/lol/${selected}`} alt={selected} width={300} height={300} className="rounded-xl mx-auto "/>
            <p className="mt-4 text-center text-lg">
              LOL {selected.replace(".png", "")}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
