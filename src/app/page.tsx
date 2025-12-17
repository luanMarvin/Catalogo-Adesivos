import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/inkanto.png";
import Lol from "../../public/images/lol.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e11] text-white px-4 sm:px-8 py-6">
      <div className="mb-8 flex justify-center">
        <Image
          src={Logo}
          alt="Inkanto"
          className="w-32 sm:w-40 md:w-48"
        />
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        <Link href="/league-of-legends">
          <div className="rounded-xl bg-[#18181d] border border-white/10 p-3 sm:p-4 hover:scale-105 transition cursor-pointer">
            <Image
              src={Lol}
              alt="League of Legends"
              className="rounded-lg w-full h-auto"
            />
            <h2 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-center">
              League of Legends
            </h2>
          </div>
        </Link>
      </section>
    </main>
  );
}
