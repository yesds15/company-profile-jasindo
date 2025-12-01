import { portfolioData } from "@/data/portfolio"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-50 via-sky-50 to-white border-y border-white/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg uppercase tracking-[0.2em]">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-slate-900">
            Project yang Telah Kami Kerjakan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Koleksi project lintas industri yang menunjukkan bagaimana strategi dan desain kami menghasilkan nilai
            bisnis nyata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur border border-white shadow-lg shadow-blue-100/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/80 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/20 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
