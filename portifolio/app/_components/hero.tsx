import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import msfImg from "../../public/msf.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-slate-100">
      {/* Background image (mobile) */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={msfImg}
          alt="Felipe Fontana Seganfredo"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10 lg:pb-0 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* TEXT */}
          <div className="space-y-8 lg:pb-20">
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Felipe Fontana
                <span className="block text-purple-400">
                  Seganfredo
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl">
                Transformando dados em decisões estratégicas e ideias em
                software funcional e escalável.
              </p>
            </header>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-black/40 backdrop-blur px-4 py-1 text-sm font-semibold">
                Data Analyst
              </span>
              <span className="rounded-full bg-black/40 backdrop-blur px-4 py-1 text-sm font-semibold">
                Software Developer
              </span>
            </div>

            {/* CTA   */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-700 hover:-translate-y-0.5"
              >
                <GithubLogoIcon size={22} weight="fill" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
              >
                <LinkedinLogoIcon size={22} weight="fill" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* IMAGE (desktop) */}
          <div className="relative hidden lg:flex items-end self-end h-full">
            <div className="relative w-full h-125 xl:h-150"> 
               <Image
                src={msfImg}
                alt="Felipe Fontana Seganfredo"
                fill
                priority
                quality={100}
                sizes="50vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </article>
      </div>

      {/* Decorative blur */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
    </section>
  );
}