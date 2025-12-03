import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Rocket } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing clean, maintainable code that follows best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Completing projects on time with the best quality",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A passionate developer creating innovative digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/600x400?text=Developer+workspace+with+modern+setup+dual+monitors+and+clean+desk"
                alt="Developer workspace with modern setup dual monitors and clean desk"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started my journey as a developer in 2018. Over the years, I have worked with
                various technologies and frameworks, developing complex web applications for clients from various
                industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion is turning ideas into reality through code. I believe that technology should
                make human life easier, and that's what I try to achieve in every project I work on.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
