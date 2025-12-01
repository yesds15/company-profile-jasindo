import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 px-6 md:px-20 bg-gradient-to-b from-sky-50 via-white to-indigo-50"
    >
      <div className="absolute inset-x-0 top-12 mx-auto h-72 w-[80%] rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.35),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 text-primary rounded-full text-sm font-medium shadow-sm">
              <span className="size-2 rounded-full bg-primary" />
              Solusi Digital Berbasis Inovasi
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-slate-900">
              Wujudkan Bisnis Digital <span className="text-primary">Impian Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-pretty">
              Kami membantu bisnis tumbuh dengan strategi teknologi modern dan desain yang memukau — dari website
              responsif, aplikasi mobile, hingga kampanye pemasaran digital yang terukur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group shadow-lg shadow-primary/20" asChild>
                <a href="#contact">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-white/80 backdrop-blur border-primary/40 hover:bg-primary/10"
                asChild
              >
                <a href="#portfolio">Lihat Portfolio</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-white/80 backdrop-blur shadow-2xl shadow-blue-200/50 border border-white/60 overflow-hidden">
              <img src="/hero-illustration.svg" alt="Digital Solutions" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-blue-300/40 rounded-3xl blur-3xl" />
            <div className="absolute -top-8 -right-4 w-40 h-40 bg-indigo-300/40 rounded-3xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
