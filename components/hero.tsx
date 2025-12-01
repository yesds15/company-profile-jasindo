import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Halo, saya</p>
              <h1 className="text-5xl md:text-7xl font-bold text-balance">John Doe</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">Full Stack Developer</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya adalah seorang developer yang passionate dalam membangun aplikasi web modern dan user-friendly.
              Dengan pengalaman lebih dari 5 tahun, saya fokus pada pengembangan solusi yang efisien dan scalable.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" asChild>
                <a href="#contact">Hubungi Saya</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Lihat Portfolio</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl absolute inset-0" />
              <img
                src="https://placehold.co/400x400?text=Professional+headshot+portrait+in+business+casual+attire+with+neutral+background"
                alt="Professional headshot portrait in business casual attire with neutral background"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
