// Pastikan baris import ini dicopy juga karena ada penambahan icon baru (ShieldCheck & Globe)
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  HeadphonesIcon, 
  Globe, 
  TrendingUp 
} from "lucide-react"

export const whyChooseUsData = [
  {
    icon: Users,
    title: "Tim Ahli & Berpengalaman",
    description:
      "Didukung oleh tenaga profesional yang sangat menguasai regulasi ekspor-impor, prosedur kepabeanan, dan penanganan kargo spesifik.",
  },
  {
    icon: Clock,
    title: "Jaminan Ketepatan Waktu",
    description: "Komitmen memberikan estimasi jadwal (ETA) yang akurat dengan perencanaan rute pengiriman paling efisien.",
  },
  {
    icon: ShieldCheck, // Mengganti 'Award' dengan ShieldCheck (Keamanan)
    title: "Keamanan Kargo Prioritas",
    description: "Penerapan SOP ketat untuk memastikan barang Anda tetap aman dan utuh mulai dari loading hingga sampai di tujuan.",
  },
  {
    icon: HeadphonesIcon,
    title: "Layanan Pelanggan Responsif",
    description: "Tim support yang selalu siap membantu konsultasi pemberkasan dan memberikan update status pengiriman secara cepat.",
  },
  {
    icon: Globe, // Mengganti 'Code2' dengan Globe (Jaringan Global)
    title: "Jaringan Global Luas",
    description: "Memiliki koneksi kuat dengan agen pelayaran dan mitra logistik di berbagai negara untuk jangkauan internasional.",
  },
  {
    icon: TrendingUp,
    title: "Biaya Kompetitif & Transparan",
    description: "Memberikan solusi logistik dengan perhitungan biaya yang efisien dan jujur, tanpa biaya tersembunyi.",
  },
]