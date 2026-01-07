import Image from "next/image";
import { FolderSimpleIcon, LinkIcon } from "@phosphor-icons/react/dist/ssr";
import placeHolderImg from "../../public/dashboard.jpg"

export function Projects() {
  const projects = [
    {
      title: "Lorem Ipsum Analytics Dashboard",
      tech: "Python, Power BI, SQL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: placeHolderImg,
      githubLink: "#", 
      liveLink: "#" 
    },
    {
      title: "Data Pipeline Automation (Cloud)",
      tech: "AWS S3, Lambda, Glue, Python",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: placeHolderImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Machine Learning Model (Concept)",
      tech: "Python, Scikit-learn, Pandas",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: placeHolderImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Interactive Data Visualization",
      tech: "Power BI, DAX, Excel",
      description: "Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: placeHolderImg,
      githubLink: "#",
      liveLink: "#"
    },
  ];

  return (
    <section id="projetos" className="bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-24 text-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Meus <span className="text-purple-400">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col h-full bg-slate-800 rounded-lg shadow-xl overflow-hidden 
                         transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative w-full h-52 bg-slate-700 overflow-hidden">
                <Image
                  src={project.image || "/project-placeholder.jpg"} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-base mb-6 grow">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    <FolderSimpleIcon size={20} weight="fill" />
                    GitHub
                  </a>
                  {project.liveLink && project.liveLink !== '#' && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold ml-4"
                    >
                      <LinkIcon size={20} weight="fill" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 mt-16 text-lg">
          Em breve, mais projetos incríveis aqui!
        </p>
      </div>
    </section>
  );
}