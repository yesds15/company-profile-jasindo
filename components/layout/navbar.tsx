"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Pelayanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Kontak", href: "#contact" },
]


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 text-2xl font-bold text-primary">
            {/* <Image 
              src="/logo.jpeg" 
              alt="Skyra Studio Logo" 
              width={60} 
              height={60} 
              className="object-contain bg-transparent" 
            /> */}
            <span>PT Jasindo Putra Perkasa</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="shadow-md shadow-blue-200/60">
              <a href="#contact">Hubungi Kami</a>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2" asChild>
                <a href="#contact">Hubungi Kami</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
