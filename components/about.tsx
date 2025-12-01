import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Rocket } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Menulis kode yang bersih, maintainable, dan mengikuti best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Menciptakan pengalaman pengguna yang intuitif dan menarik",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Menyelesaikan proyek tepat waktu dengan kualitas terbaik",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Tentang Saya</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Developer yang bersemangat menciptakan solusi digital yang inovatif
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
                Saya memulai perjalanan sebagai developer sejak 2018. Selama bertahun-tahun, saya telah bekerja dengan
                berbagai teknologi dan framework, mengembangkan aplikasi web yang kompleks untuk klien dari berbagai
                industri.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passion saya adalah mengubah ide menjadi kenyataan melalui kode. Saya percaya bahwa teknologi harus
                memudahkan hidup manusia, dan itulah yang saya coba wujudkan dalam setiap proyek yang saya kerjakan.
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
