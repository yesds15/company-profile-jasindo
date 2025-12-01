import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Sekarang",
      description:
        "Memimpin tim pengembangan untuk membangun aplikasi enterprise scale. Bertanggung jawab atas arsitektur sistem dan code review.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Mengembangkan berbagai website dan aplikasi web untuk klien dari berbagai industri. Fokus pada pengembangan frontend dan backend.",
      technologies: ["React", "Express", "MongoDB", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Startup Innovate",
      period: "2018 - 2020",
      description:
        "Membangun interface user-friendly dan responsive untuk aplikasi mobile dan web. Bekerja sama dengan tim design dan backend.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Pengalaman Kerja</h2>
            <p className="text-xl text-muted-foreground text-balance">Perjalanan karir profesional saya</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
