"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/inkanto.png";

import HollowKnight from "../../public/images/hollow.png";
import Lol from "../../public/images/lol.png";
import ClassicRock from "../../public/images/classicrock.png";
import GameOfThrones from "../../public/images/got.png";
import Naruto from "../../public/images/naruto.png";
import OnePiece from "../../public/images/onepiece.png";
import RickMorty from "../../public/images/rickmorty.png";
import Simpsons from "../../public/images/simpsons.png";
import Soccer from "../../public/images/soccer.png";
import SouthPark from "../../public/images/southpark.png";
import BreakingBad from "../../public/images/breakingbad.png";
import Sanrio from "../../public/images/sanrio.png";
import Dreamworks from "../../public/images/dreamworks.png";
import Yugioh from "../../public/images/yugioh.png";
import Pokemon from "../../public/images/pokemon.png";
import DragonBall from "../../public/images/dragonball.png";
import GTA from "../../public/images/gta.png";
import Overwatch from "../../public/images/overwatch.png";
import WatchDogs from "../../public/images/watchdogs.png";
import Minecraft from "../../public/images/minecraft.png";
import Disney from "../../public/images/disney.png";
import Hxh from "../../public/images/hxh.png";
import PeakyBlinders from "../../public/images/peakyblinders.png";
import StrangerThings from "../../public/images/strangerthings.png";

function normalize(text:String) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const items = [
  {
    href: "/league-of-legends",
    image: Lol,
    title: "League of Legends",
  },
  {
    href: "/hollow-knight",
    image: HollowKnight,
    title: "Hollow Knight",
  },
  {
    href: "/classic-rock",
    image: ClassicRock,
    title: "Rock Clássico",
  },
  {
    href: "/game-of-thrones",
    image: GameOfThrones,
    title: "Game Of Thrones",
  },
  {
    href: "/naruto",
    image: Naruto,
    title: "Naruto",
  },
  {
    href: "/one-piece",
    image: OnePiece,
    title: "One Piece",
  },
  {
    href: "/rick-and-morty",
    image: RickMorty,
    title: "Rick And Morty",
  },
  {
    href: "/simpsons",
    image: Simpsons,
    title: "Simpsons",
  },
  {
    href: "/soccer",
    image: Soccer,
    title: "Futebol",
  },
  {
    href: "/south-park",
    image: SouthPark,
    title: "South Park",
  },
  {
    href: "/breaking-bad",
    image: BreakingBad,
    title: "Breaking Bad",
  },
  {
    href: "/sanrio",
    image: Sanrio,
    title: "Personagens da Sanrio",
  },
  {
    href: "/dreamworks",
    image: Dreamworks,
    title: "Universo Dreamworks",
  },
  {
    href: "/yugioh",
    image: Yugioh,
    title: "Yu-Gi-Oh!",
  },
  {
    href: "/pokemon",
    image: Pokemon,
    title: "Pokémon",
  },
  {
    href: "/dragon-ball",
    image: DragonBall,
    title: "Universo Dragon Ball",
  },
  {
    href: "/gta",
    image: GTA,
    title: "Universo GTA",
  },
  {
    href: "/overwatch",
    image: Overwatch,
    title: "Overwatch",
  },
  {
    href: "/watch-dgos",
    image: WatchDogs,
    title: "Universo Watch Dogs",
  },
  {
    href: "/minecraft",
    image: Minecraft,
    title: "Minecraft",
  },
  {
    href: "/disney",
    image: Disney,
    title: "Universo Disney",
  },
  {
    href: "/hxh",
    image: Hxh,
    title: "Hunter x Hunter 2011",
  },
  {
    href: "/peakyblinder",
    image: PeakyBlinders,
    title: "Peaky Blinders",
  },
  {
    href: "/strangerthings",
    image: StrangerThings,
    title: "Stranger Things",
  }
];


export default function Home() {
  const [search, setSearch] = useState("")

  const filteredItems = items.filter(item =>
    normalize(item.title).includes(normalize(search))
  )
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white px-4 sm:px-8 py-6">
      <div className="mb-6 flex flex-col items-center gap-4">
        <Image src={Logo} alt="Inkanto" className="w-32 sm:w-40 md:w-48" />

        <input
          type="text"
          placeholder="Buscar Adesivos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg bg-[#18181d] border border-white/10 px-4 py-2 outline-none"
        />
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map(({ href, image, title }) => (
          <Link key={href} href={href}>
            <div className="rounded-xl bg-[#18181d] border border-white/10 p-3 sm:p-4 hover:scale-105 transition cursor-pointer">
              <Image src={image} alt={title} className="rounded-lg w-full h-auto" />
              <h2 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-center">
                {title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
