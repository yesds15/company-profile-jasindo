"use client"

import { useState } from "react"
import { portfolioData } from "@/data/portfolio"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

type PortfolioItem = typeof portfolioData[0]

function PortfolioImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)

  const showPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative overflow-hidden group rounded-lg">
      <img
        src={images[current] || "/placeholder.svg"}
        alt={`${title} preview slide ${current + 1}`}
        className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index ? "w-5 bg-white" : "w-2 bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const handleCardClick = (project: PortfolioItem) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-50 via-sky-50 to-white border-y border-white/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg uppercase tracking-[0.2em]">Portofolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-slate-900">
            Layanan & Pengalaman Kami
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Rekam jejak kami dalam menangani berbagai tantangan logistik, mulai dari kargo umum hingga alat berat dengan strategi pengiriman yang aman.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(project)}
              className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur border border-white shadow-lg shadow-blue-100/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/80 transition-all duration-300 cursor-pointer"
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

      {/* Portfolio Detail Modal */}
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
          <div className="p-6 md:p-8">
            {/* Image Slider */}
            <div className="mb-6">
              <PortfolioImageSlider 
                images={selectedProject.images || [selectedProject.image]} 
                title={selectedProject.title} 
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{selectedProject.title}</h2>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-base text-slate-600 leading-relaxed">{selectedProject.description}</p>
            </div>

            {/* Tech Stack / Tags */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Spesifikasi Layanan</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/20 text-primary text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
