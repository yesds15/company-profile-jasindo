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
    link: "https://wa.me/6287880475274", // Update: Langsung ke WhatsApp
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

  // --- LOGIKA KIRIM EMAIL ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Siapkan data tujuan dan isi pesan
    const emailTujuan = "jasindocargoputraperkasa@gmail.com"
    const subject = `Pesan Website dari: ${formData.name}`

    // 2. Format isi email agar rapi saat dibuka
    const body = `Halo Tim Jasindo,%0D%0A%0D%0ASaya ingin bertanya mengenai layanan logistik.%0D%0A%0D%0ADetail Pengirim:%0D%0ANama: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ANo HP: ${formData.phone}%0D%0A%0D%0APesan:%0D%0A${formData.message}`

    // 3. Buka aplikasi email bawaan user
    window.location.href = `mailto:${emailTujuan}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    // PERBAIKAN TAMPILAN: Padding dikurangi (py-12 px-4) agar pas di layar HP
    <section id="contact" className="py-12 px-4 md:py-20 md:px-20 bg-gradient-to-t from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Judul - Ukuran font disesuaikan untuk HP */}
        <div className="text-center space-y-3 mb-10 md:mb-16">
          <span className="text-secondary font-semibold text-sm md:text-lg uppercase tracking-[0.2em]">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
            Percayakan kebutuhan Anda kepada kami
          </h2>
          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Jika ada yang ingin ditanyakan segera hubungi kontak dibawah ini!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Kolom Kiri: Info Kontak */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors flex-shrink-0">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-semibold mb-1 text-sm md:text-base">{info.title}</h4>
                    {/* class break-all agar email panjang tidak melebar keluar layar HP */}
                    <p className="text-white/70 text-sm md:text-base break-all">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Jam Kerja */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Jam Kerja</h3>
              <div className="space-y-2 text-white/70 text-sm md:text-base">
                <p>Senin - Sabtu: 07:00 - 18:00 (WIB)</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Input */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/40 text-slate-900 order-1 lg:order-2"
          >
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
                className="h-10 md:h-12 text-sm md:text-base" // Tinggi input disesuaikan untuk HP
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
                className="h-10 md:h-12 text-sm md:text-base"
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
                placeholder="Contoh: 0812345678"
                required
                className="h-10 md:h-12 text-sm md:text-base"
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
                placeholder="Tuliskan pesan Anda..."
                required
                rows={4} // Row dikurangi biar ga kepanjangan di HP
                className="resize-none text-sm md:text-base"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base md:text-lg shadow-lg shadow-blue-500/30 py-6 md:py-4"
            >
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}