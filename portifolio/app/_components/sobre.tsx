import { 
  CloudArrowUpIcon, 
  DatabaseIcon, 
  ChartLineUpIcon, 
  CodeBlockIcon,
  GraduationCapIcon,
  CertificateIcon
} from "@phosphor-icons/react/dist/ssr";

export function About() {
  const experiences = [
    {
      company: "Compass UOL",
      role: "Data Analyst | Trainee",
      period: "06/2025 - 12/2025",
      description: "Atuei em clientes reais, utilizando principalmente SQL, Python, GCP e PowerBI.",
      tags: ["Python", "PowerBI", "GCP", "SQL"]
    },
    {
      company: "Compass UOL",
      role: "Data Analyst | Intern",
      period: "06/2024 – 11/2024",
      description: "Desenvolvimento de pipelines de dados e dashboards interativos AWS, foco em estudo geral de dados e conceitos base.",
      tags: ["Python", "AWS", "ETL"]
    },
    {
      company: "Bioserv",
      role: "Full-Stack Developer Intern",
      period: "07/2023 – 03/2024",
      description: "Modernização de processos internos e automação de fluxos administrativos com sistemas web.",
      tags: ["Full-Stack", "Automação", "Web"]
    }
  ];

  return (
    <section id="sobre" className="bg-slate-900 py-24 text-slate-100">
      <div className="container mx-auto px-6">
        
        {/* GRID PRINCIPAL: BIO E EXPERIÊNCIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* COLUNA ESQUERDA: BIO & EDUCAÇÃO */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-purple-500/30 pb-4">
                Sobre Mim
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Analista de Dados com sólida base em Ciência da Computação. Minha especialidade é 
                construir a ponte entre o dado bruto e a decisão estratégica, utilizando 
                <span className="text-purple-400 font-semibold"> Python, SQL e Cloud (AWS/GCP)</span>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Com experiência em ambientes ágeis, foco em automatizar o que é manual e 
                transformar dashboards em ferramentas de alta visibilidade de KPIs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400">
                <GraduationCapIcon size={28} /> Formação & Certificações
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-slate-700 pl-4 py-1">
                  <h4 className="font-bold">Ciência da Computação</h4>
                  <p className="text-sm text-slate-400 italic">IFSul (Previsão 12/2026)</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4 py-1 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">AWS Cloud Practitioner</h4>
                    <p className="text-sm text-slate-400 font-mono">Certificado em 11/2024</p>
                  </div>
                  <CertificateIcon size={32} className="text-purple-500 opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: EXPERIÊNCIA */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-3xl font-bold border-b border-purple-500/30 pb-4">
              Experiência Profissional
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-mono text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-slate-300 font-medium mb-3 italic">{exp.role}</h4>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold bg-slate-800 px-2 py-1 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK SKILLS GRID - FORA DO GRID SUPERIOR PARA PREENCHER A TELA */}
        <div className="pt-12 border-t border-slate-800">
          <h3 className="text-center text-slate-500 uppercase tracking-[0.2em] text-xs font-bold mb-10">
            Principais Competências Técnicas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all text-center space-y-3">
              <DatabaseIcon className="mx-auto text-blue-400" size={32} />
              <span className="block text-sm font-bold uppercase tracking-wider">SQL / ETL</span>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-all text-center space-y-3">
              <CodeBlockIcon className="mx-auto text-yellow-400" size={32} />
              <span className="block text-sm font-bold uppercase tracking-wider">Python</span>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all text-center space-y-3">
              <ChartLineUpIcon className="mx-auto text-purple-400" size={32} />
              <span className="block text-sm font-bold uppercase tracking-wider">Power BI</span>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all text-center space-y-3">
              <CloudArrowUpIcon className="mx-auto text-emerald-400" size={32} />
              <span className="block text-sm font-bold uppercase tracking-wider">AWS / GCP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}