"use client"


import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
  title: string
  images: string[]
  descriptionTitle: string
  descriptionItems?: string[]
  longDescription?: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Skyra Studio Commerce Cloud",
    images: [
      "https://placehold.co/800x500?text=Skyra+Studio+Commerce+Cloud+-+Storefront+UI",
      "https://placehold.co/800x500?text=Skyra+Studio+Commerce+Cloud+-+Checkout+Flow",
      "https://placehold.co/800x500?text=Skyra+Studio+Commerce+Cloud+-+Analytics+Dashboard",
    ],
    descriptionTitle: "End-to-end e‑commerce platform for modern brands",
    descriptionItems: [
      "Conversion‑focused storefront with fast product discovery and mobile‑first UX.",
      "Streamlined checkout flow integrated with Stripe and multiple local payment options.",
      "Admin dashboard for catalog, inventory, and promotions with role‑based access control.",
    ],
    longDescription:
      "Skyra Studio Commerce Cloud is designed for brands that need both flexibility and speed. We combined a headless architecture with a modern storefront so marketing teams can experiment quickly while engineering keeps the platform stable and secure.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SprintFlow Workspace",
    images: [
      "https://placehold.co/800x500?text=SprintFlow+Workspace+-+Kanban+Board",
      "https://placehold.co/800x500?text=SprintFlow+Workspace+-+Team+Collaboration",
      "https://placehold.co/800x500?text=SprintFlow+Workspace+-+Reports",
    ],
    descriptionTitle: "Collaboration-first task management for product teams",
    descriptionItems: [
      "Real‑time kanban board with drag‑and‑drop, filters, and per‑team swimlanes.",
      "In‑card discussions, mentions, and activity history for full context.",
      "Sprint health reports and workload views to keep planning realistic.",
    ],
    longDescription:
      "SprintFlow Workspace helps cross‑functional teams stay aligned without adding friction. It brings together tasks, conversations, and metrics in a single surface so everyone can see what matters now and what is coming next.",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

function ProjectImageSlider({ images, title, isModal = false }: { images: string[]; title: string; isModal?: boolean }) {
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
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          isModal ? "h-64 md:h-96" : "h-56 md:h-64"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-1.5 hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-1.5 hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
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

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleCardClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Featured product builds</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A closer look at a few Skyra Studio projects, including the flows, features, and technology behind them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                <ProjectImageSlider images={project.images} title={project.title} />

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button
                          size="icon"
                          variant="outline"
                          asChild
                          className="h-9 w-9 bg-background/80"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button
                          size="icon"
                          variant="outline"
                          asChild
                          className="h-9 w-9 bg-background/80"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{project.descriptionTitle}</p>
                    {project.descriptionItems && (
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                        {project.descriptionItems.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.longDescription && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {project.longDescription}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
          <div className="p-6 md:p-8">
            {/* Image Slider */}
            <div className="mb-6">
              <ProjectImageSlider images={selectedProject.images} title={selectedProject.title} isModal={true} />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h2>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-lg font-semibold text-primary">{selectedProject.descriptionTitle}</p>
              
              {selectedProject.descriptionItems && selectedProject.descriptionItems.length > 0 && (
                <ul className="space-y-2 text-muted-foreground">
                  {selectedProject.descriptionItems.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {selectedProject.longDescription && (
                <p className="text-base text-muted-foreground leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <Button asChild className="flex-1">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-2" />
                    View Live
                  </a>
                </Button>
              )}
              {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                <Button asChild variant="outline" className="flex-1">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
