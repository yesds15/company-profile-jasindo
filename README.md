# React static website



## Getting Started

1. Install dependencies sekali saja setelah clone:

```bash
npm install
```

> **Catatan:** Jangan memakai `next` global (`next dev`, `next start`, dst). Perintah itu akan memakai Next.js di `/usr/local/lib` dan membuat error React tidak ditemukan. Selalu jalankan perintah lewat `npm run ...` agar memakai Next.js lokal project ini.

2. Jalankan server development:

```bash
npm run dev
```

Server akan aktif di [http://localhost:3000](http://localhost:3000).

3. Untuk build production dan menjalankan hasil build:

```bash
npm run build
npm run start
```

Setelah `npm run start`, server production aktif di [http://localhost:3001](http://localhost:3001).

## Konsep & Identitas Visual

- **Warna dasar biru** – palet utama memakai gradasi biru (sky, indigo) dengan aksen cyan dan ungu agar antarmuka terasa modern namun tetap profesional.
- **Lapisan warna dinamis** – setiap section memiliki gradasi/blur blob sehingga tampilan tidak polos dan membantu membedakan blok konten.
- **Ilustrasi kustom** – file `public/hero-illustration.svg` dan `public/team-collaboration.svg` menjadi hero/about image sehingga tidak lagi menampilkan placeholder.
- **Portfolio nyata** – kartu portfolio kini menggunakan foto tematik dari Unsplash agar cerita proyek lebih hidup.
- **Call-to-action jelas** – tombol “Lihat Portfolio” langsung mengarah ke section `#portfolio`, sedangkan CTA lain menuntun ke formulir kontak.

## Project Structure

This project uses:
- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

