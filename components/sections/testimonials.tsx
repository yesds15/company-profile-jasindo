"use client"

import { testimonialsData } from "@/data/testimonials"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg uppercase tracking-[0.25em]">Testimonial</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-slate-900">Apa Kata Klien Kami</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cerita nyata dari klien yang merasakan transformasi bisnis bersama TechVision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/85 border border-white/70 backdrop-blur shadow-lg shadow-blue-100/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/80 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-current" size={18} />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
