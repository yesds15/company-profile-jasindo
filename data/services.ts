import { Briefcase, Ship, Truck, FileCheck, UserCheck, Globe } from "lucide-react"

export const servicesData = [
  {
    icon: Briefcase,
    title: "Jasa Agency",
    description: "Layanan agency untuk keperluan penunjang jasa ekspor-impor.",
    features: ["Pengurusan Dokumen Legalitas", "Konsultasi Regulasi Ekspor-Impor", "Perizinan Instansi Terkait (LARTAS)", "Manajemen Rantai Pasok"],
  },
  {
    icon: Ship,
    title: "Cargo",
    description: "Layanan pengiriman barang dalam jumlah besar melalui laut dan udara untuk domestik dan internasional.",
    features: ["Pengiriman Jalur Laut (Sea Freight)", "Pengiriman Jalur Udara (Air Freight)", "Layanan Door to Door", "Layanan Port to Port"],
  },
  {
    icon: Truck,
    title: "Trucking",
    description: "Layanan pengiriman barang dengan angkutan darat / inland trucking.",
    features: ["Armada CDD, Fuso, & Tronton", "Trailer 20ft & 40ft", "Pengiriman Wingbox", "Distribusi Antar Kota (Inland)"],
  },
  {
    icon: FileCheck,
    title: "Custom Clearance",
    description: "Layanan proses custom clearance baik di Pelabuhan Tanjung Priok maupun di Bandara Soekarno-Hatta.",
    features: ["Sistem EDI (Electronic Data Interchange)", "Perhitungan Pajak & Bea Masuk", "Penanganan Pemeriksaan Fisik (Beille)", "Penyelesaian Administrasi Kepabeanan"],
  },
  {
    icon: UserCheck,
    title: "Over Consignee / QQ",
    description: "Layanan over consignee untuk pengiriman barang impor.",
    features: ["Penyewaan Izin Impor (Undername)", "Penanganan Dokumen Consignee", "Solusi Importir Tanpa API/NIB", "Transparansi Biaya Import"],
  },
  {
    icon: Globe,
    title: "International Freight Forwarders",
    description: "Layanan pengiriman dalam LCL, FCL, maupun break bulk, baik ekspor maupun impor.",
    features: ["Less Container Load (LCL)", "Full Container Load (FCL)", "Penanganan Break Bulk", "Jaringan Agen Global"],
  },
]
