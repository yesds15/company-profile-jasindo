import { whyChooseUsData } from "@/data/why-choose-us"

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg uppercase tracking-[0.3em]">Mengapa Memilih Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-slate-900">
            Keunggulan yang Membuat Kami Berbeda
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Rangkaian nilai yang memastikan setiap proyek berjalan terukur, transparan, dan menghasilkan impact bisnis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl border border-white bg-gradient-to-br from-white via-blue-50/80 to-purple-50/80 shadow-lg shadow-blue-100/60 hover:shadow-blue-200/80 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg shadow-blue-200/60">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
