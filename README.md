## 📘 Skyra Studio – Website Portofolio Perusahaan

### 1. Cover & Informasi Project

- **Nama Website / Template**: **Skyra Studio – Company Portfolio Website**
- **Versi**: **v0.1.0**
- **Dibuat oleh**: **Skyra Studio**

### Tech Stack

- **Next.js 15.0.3** - React framework untuk production
- **React 18.3.1** - Library JavaScript untuk UI
- **TypeScript** - Bahasa pemrograman dengan type safety
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icon library modern

---

### 2. Deskrip            si Website

Website ini adalah landing page / website portofolio perusahaan yang menampilkan:

- **Hero** – Headline utama dan CTA
- **About** – Tentang perusahaan
- **Services** – Layanan yang ditawarkan
- **Portfolio / Projects** – Contoh project
- **Why Choose Us** – Alasan memilih perusahaan
- **Testimonials** – Testimoni klien
- **Contact** – Form & informasi kontak

**Cocok untuk:**

- ✅ Perusahaan jasa / software house / agency
- ✅ Personal brand yang ingin tampilan seperti studio/agency
- ✅ UMKM yang ingin website company profile modern

---

### 3. Persyaratan (Requirement)

- **OS**: Windows 10/11, macOS, atau Linux
- **RAM**: Minimal 4GB (disarankan 8GB)
- **Node.js**: Versi 18.x atau lebih baru  
  - Cek versi dengan:

```bash
node -v
```

Text editor yang disarankan: **VS Code**.

---

### 4. Cara Menjalankan Project (Setup)

1. **Install dependencies**

```bash
npm install
```

> **Catatan:** Jangan pakai `next dev` global. Selalu jalankan via `npm run ...` agar menggunakan Next.js lokal project.

2. **Jalankan development server**

```bash
npm run dev
```

Buka di browser: `http://localhost:3000`

3. **Build & run untuk production**

```bash
npm run build
npm run start
```

Setelah `npm run start`, server production aktif (biasanya di `http://localhost:3001` atau port yang tersedia).

---

### 5. Struktur Folder (Ringkas)

```bash
website_company/
├── app/                    # Halaman & layout Next.js (App Router)
│   ├── page.tsx            # Halaman utama (menggabungkan semua section)
│   ├── layout.tsx          # Layout global + metadata
│   └── globals.css         # Styling global & warna
│
├── components/             # Komponen UI & section
│   ├── layout/
│   │   ├── navbar.tsx      # Navigation bar
│   │   └── footer.tsx      # Footer
│   ├── sections/           # Section utama halaman
│   │   ├── hero.tsx        # Hero section
│   │   ├── about.tsx       # About section
│   │   ├── services.tsx    # Services section
│   │   ├── portfolio.tsx   # Portfolio / projects section
│   │   ├── testimonials.tsx# Client testimonials
│   │   ├── contact.tsx     # Contact section
│   │   └── why-choose-us.tsx # Why choose us section
│   ├── projects.tsx        # Komponen detail project (modal & slider)
│   ├── navigation.tsx      # (Jika digunakan) komponen navigasi tambahan
│   └── ui/                 # Komponen UI dasar (button, card, input, modal, textarea)
│
├── data/                   # ⭐ DATA KONTEN UTAMA
│   ├── portfolio.ts        # Data project / portfolio
│   ├── services.ts         # Data layanan
│   ├── testimonials.ts     # Data testimoni klien
│   └── why-choose-us.ts    # Data keunggulan / alasan memilih
│
├── public/                 # File statis (gambar, logo, ilustrasi)
│   ├── logo.jpeg           # Logo brand (Skyra Studio)
│   ├── hero-illustration.svg
│   └── team-collaboration.svg
│
├── lib/                    # Utility (misal: helper function)
│   └── utils.ts
│
├── package.json            # Dependencies & npm scripts
└── tailwind.config.js      # Konfigurasi Tailwind CSS
```

**Folder penting untuk edit konten:**

- **`data/`** → ganti teks konten (services, portfolio, testimonials, why-choose-us)
- **`public/`** → ganti gambar/logo
- **`app/globals.css`** → ganti warna & style global

---

### 6. Cara Mengganti Konten

#### A. Mengganti Brand Name & Logo

- Brand name utama ada di:
  - `components/layout/navbar.tsx` → teks **Skyra Studio**
- Logo:
  - File logo: `public/logo.jpeg`
  - Referensi logo digunakan di `navbar.tsx` (saat ini bisa diaktif/nonaktifkan via JSX comment).

#### B. Mengganti Hero Text

- File: `components/sections/hero.tsx`  
Edit:
- Judul utama (`h1`)
- Deskripsi (`<p>` di bawah heading)
- Teks tombol CTA (“Get Started”, “View Portfolio”)

#### C. Mengganti About Section

- File: `components/sections/about.tsx`
- Ilustrasi: `public/team-collaboration.svg`
- Deskripsi perusahaan & highlight value bisa diedit langsung di file ini.

#### D. Mengganti Services

- File data: `data/services.ts`
- File tampilan: `components/sections/services.tsx`

Tambahkan / hapus layanan dengan mengubah array di `data/services.ts`.

#### E. Mengganti Portfolio / Projects

- File data utama: `data/portfolio.ts`
- Komponen section: `components/sections/portfolio.tsx`
- Komponen detail / slider: `components/projects.tsx`

Anda bisa:

- Menambah project baru dengan menambah object baru di `data/portfolio.ts`
- Mengganti gambar (saat ini menggunakan URL / placeholder) dengan path lokal jika diinginkan

#### F. Mengganti Testimonials

- File data: `data/testimonials.ts`
- Section: `components/sections/testimonials.tsx`

Untuk menambah testimoni baru, tambahkan object baru ke array `testimonialsData`.

#### G. Mengganti Why Choose Us

- Data: `data/why-choose-us.ts`
- Section: `components/sections/why-choose-us.tsx`

Ubah judul, deskripsi, dan list keunggulan di file data.

#### H. Mengganti Informasi Kontak

- Section: `components/sections/contact.tsx`

Edit:

- Email (`hello@rifinity.com` → ganti ke email Anda)
- Nomor telepon
- Alamat / lokasi

---

### 7. Mengganti Warna & Tampilan

#### A. Warna Utama

- File: `app/globals.css`
- Cari bagian `:root` dan ubah variabel warna (misal `--primary`, `--secondary`, dll) sesuai brand Anda.

#### B. Font

- File: `app/layout.tsx`
- Saat ini menggunakan font `Inter` dan `Poppins` dari Google Fonts. Anda bisa mengganti ke font lain dengan menyesuaikan import dan konfigurasi di file ini.

---

### 8. Deploy / Publish Website

**Opsi 1 – Vercel (Disarankan)**

1. Push project ke GitHub.
2. Buka `https://vercel.com`, login dengan GitHub.
3. Klik **New Project** → pilih repo.
4. Vercel akan otomatis mendeteksi Next.js dan melakukan deploy.

**Opsi 2 – Platform lain (Netlify / manual VPS, dsb)**  
Ikuti pola standar Next.js:

```bash
npm run build
```

Lalu ikuti dokumentasi hosting masing-masing.

---

### 9. FAQ Singkat

- **Q: Bisa ganti semua konten tanpa ngerti coding?**  
  **A:** Bisa, selama nyaman mengedit file `.tsx` dan `.ts` sederhana (teks & list).

- **Q: Bisa dipakai untuk banyak klien?**  
  **A:** Bisa, cukup duplikasi folder project dan ganti kontennya.

- **Q: Apakah SEO friendly?**  
  **A:** Next.js sudah SEO-friendly; metadata dasar di-set di `app/layout.tsx`. Anda bisa tambah meta tags sesuai kebutuhan.

- **Q: Bagaimana cara backup?**  
  **A:** Simpan project di Git (GitHub, GitLab, dll) atau backup folder project ke cloud storage.

---

Selamat menggunakan template **Skyra Studio – Company Portfolio Website**! 🎉

