"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "jasindocargoputraperkasa@gmail.com",
    link: "mailto:jasindocargoputraperkasa@gmail.com",
  },
  {
    icon: Phone,
    title: "Ponsel",
    content: "+62 878 8047 5274",
    link: "tel:+6287880475274",
  },
  {
    icon: MapPin,
    title: "Alamat",
    content: "North Jakarta, Indonesia",
    link: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-t from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-secondary font-semibold text-lg uppercase tracking-[0.3em]">Hubungi Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Percayakan kebutuhan Anda kepada kami</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Jika ada yang ingin ditanyakan segera hubungi kontak dibawah ini!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Jam Kerja</h3>
              <div className="space-y-2 text-white/70">
                <p>Senin - Sabtu: 07:00 - 18:00 (WIB)</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-2xl shadow-blue-900/40 text-slate-900">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nama Lengkap
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Lengkap Anda"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Alamat Email Aktif"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Nomor Handphone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukan Nomor Handphone anda"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Pesan
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Masukan isi Pesan"
                required
                rows={6}
                className="resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg shadow-lg shadow-blue-500/30">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
