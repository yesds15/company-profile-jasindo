import { servicesData } from "@/data/services"

export function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-blue-50 via-white to-sky-50 relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-72 h-72 bg-indigo-200/50 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-200/40 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg tracking-wide uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-slate-900">
            End‑to‑end digital solutions for your business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We support you from strategy to implementation so your digital transformation feels smooth, structured, and
            measurable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/70 bg-white/80 backdrop-blur shadow-lg shadow-blue-100/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/70 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
