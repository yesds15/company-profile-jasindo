"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Punya proyek atau ingin bekerja sama? Mari diskusi!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama
                    </label>
                    <Input id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject pesan" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={6} />
                </div>
                <Button size="lg" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </footer>
    </section>
  )
}
