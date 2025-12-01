import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
