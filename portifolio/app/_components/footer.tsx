"use client";

import { 
  EnvelopeSimpleIcon, 
  LinkedinLogoIcon, 
  GithubLogoIcon, 
  WhatsappLogoIcon,
  ArrowUpIcon
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* SECÇÃO DE CONTACTO (CTA) */}
        <div className="flex flex-col items-center text-center mb-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Vamos construir algo <span className="text-purple-400">incrível?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Estou sempre aberto a novas oportunidades e colaborações em projetos de 
              Análise de Dados e Engenharia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:felipefseganfredo@gmail.com"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-xl border border-slate-700 transition-all group"
            >
              <EnvelopeSimpleIcon size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">E-mail</span>
            </a>

            <a 
              href="https://wa.me/5554981308868" 
              target="_blank"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-xl border border-slate-700 transition-all group"
            >
              <WhatsappLogoIcon size={24} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* LINHA DE DIVISÃO */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-slate-800 to-transparent mb-10" />

        {/* RODAPÉ FINAL */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Felipe Fontana Seganfredo</p>
            <p className="text-slate-500 text-sm">© 2026 · Desenvolvido com Next.js & Tailwind</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/FelipeFontanaSeganfredo" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <GithubLogoIcon size={28} />
            </a>
            <a href="https://www.linkedin.com/in/felipe-seganfredo-52b140270/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <LinkedinLogoIcon size={28} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-all group"
            title="Voltar ao topo"
          >
            <ArrowUpIcon size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}