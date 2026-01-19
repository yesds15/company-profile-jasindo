import { Target, Eye, Award } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Motto",
    description: "Perusahaan aman, cepat, terpercaya dengan komitmen memberikan kualitas pelayanan yang diandalkan.",
  },
  {
    icon: Eye,
    title: "Visi",
    description: "Menjamin kualitas pelayanan logistik dan perdagangan demi memenuhi kepuasan para pelanggan.",
  },
  {
    icon: Award,
    title: "Misi",
    description: "Meningkatkan kinerja operasional untuk memberikan layanan perdagangan internasional cepat dan andal.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-t border-white/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-white/60 shadow-2xl shadow-blue-200/40">
              <img src="/team-collaboration.svg" alt="Rifinity product and engineering team collaborating" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 w-24 h-24 bg-sky-300/40 rounded-3xl blur-3xl" />
            <div className="absolute -top-8 -right-6 w-28 h-28 bg-indigo-300/40 rounded-3xl blur-3xl" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg tracking-wide">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-slate-900">
                PT Jasindo Putra Perkasa
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Adalah perusahaan jasa ekspor dan impor yang menyediakan layanan pengiriman barang secara aman, efisien, dan terpercaya.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kami melayani Jasa Agency dan pengiriman international melalui udara dan laut dengan layanan door to door, port to door, jasa custom clearance, international Freight Forwarding, Transportation dan sub distributor. Didukung tim profesional, kami siap menjadi mitra logistik terbaik untuk kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="space-y-3 p-4 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-lg shadow-blue-100/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
