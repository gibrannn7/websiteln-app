# BLUEPRINT: websiteln - Premium Digital Solutions & Automation Platform

## 1. GAMBARAN PROYEK & STRATEGI SEO

- **Tujuan Utama:** Landing page premium dari websiteln dirancang sebagai instrumen konversi tinggi tingkat enterprise. Platform ini berfungsi untuk memvalidasi kapabilitas teknis websiteln dalam menghadirkan aplikasi instan modern, migrasi sistem legacy, otomasi cerdas (Python & AI), serta program langganan pemeliharaan (maintenance subscription) yang menjadi keunggulan kompetitif utama bisnis. Target akhir halaman ini adalah memaksimalkan akuisisi prospek (lead generation) berkualitas melalui integrasi langsung ke sistem penawaran instan berbasis WhatsApp dan Email.

- **Target Audiens:**
  - Pemilik Bisnis & Direktur Perusahaan skala Menengah hingga Besar yang membutuhkan kustomisasi perangkat lunak tingkat tinggi tanpa hambatan operasional.
  - Startup Founder yang membutuhkan produk minimum layak (MVP) siap rilis dalam waktu singkat dengan arsitektur modern.
  - Manager IT & Operasional yang ingin mengotomatiskan proses bisnis repetitif, pengikisan data web (web scraping), atau integrasi kecerdasan buatan (RAG/Chatbot).
  - Organisasi yang memiliki infrastruktur legacy (seperti CodeIgniter 3) dan membutuhkan tim ahli eksternal untuk pembaruan berkelanjutan, manajemen konten, serta perpanjangan hosting.

- **Arsitektur SEO & Optimasi Kecepatan Indexing:**
  - **Struktur Meta Tag & OpenGraph Dinamis:** Konfigurasi `app/layout.tsx` menggunakan metadata API bawaan Next.js 16 untuk rendering tag SEO statis dan dinamis.
  - **Skema JSON-LD Structured Data:** Menyisipkan skema `ProfessionalService` di dalam root direktori untuk mengindikasikan jenis layanan, area operasional, harga dasar, dan keunggulan teknis langsung kepada bot perayap Google Search.
  - **Struktur HTML Semantik:** Penggunaan tag `<header>`, `<main>`, `<section>`, `<article>`, dan `<footer>` secara hierarkis untuk memastikan pembacaan konten yang efisien oleh mesin pencari.
  - **Strategi Keyword Density:** Penempatan kata kunci utama (Jasa Pembuatan Website Premium, Otomasi Python Enterprise, Integrasi AI RAG, Maintenance Website Bulanan) diintegrasikan secara organik ke dalam tag `<h1>`, `<h2>`, dan teks deskriptif dengan rasio kepadatan 1.5% hingga 2.5% tanpa praktik keyword stuffing.

- **Kebijakan Konten:**
  - Seluruh copy dan string UI wajib bernada profesional, taktis, elegan, dan persuasif. 
  - **Aturan Ketat Tanpa Emoji:** Tidak boleh ada emoji apa pun di dalam teks UI, komentar kode, penampung (placeholder), tombol aksi, atau elemen visual untuk menjaga citra korporat premium/luxury.

---

## 2. DETAIL TECH STACK & ARSITEKTUR

- **Frontend Core:**
  - Framework: Next.js 16.2.6 (App Router Architecture, React Server Components berkinerja tinggi).
  - Runtime Baseline: Node.js v20.x atau lebih tinggi / NPM v10.x.

- **UI & Styling Engine:**
  - CSS Core: Tailwind CSS v4 (Menggunakan konfigurasi berbasis direktif `@theme` baru untuk performa kompilasi instan).
  - Komponen Dasar: Shadcn/ui (Radix UI Primitives yang dikustomisasi penuh dengan token warna tema gelap).

- **Library Animasi & UI Premium:**
  - **GSAP (GreenSock Animation Platform):** Digunakan untuk menangani animasi berbasis gulir (*scroll-driven animations*) berskala besar pada bagian fitur dan portofolio guna memastikan kelancaran rendering 60 FPS.
  - **Framer Motion:** Menangani transisi status mikro, interaksi hover tombol, serta siklus hidup buka/tutup komponen modal portofolio tanpa menyebabkan pergeseran tata letak (*Cumulative Layout Shift* / CLS).
  - **React Bits Integrasi:**
    - Pemasangan Komponen Latar Belakang Kontak: `npx shadcn@latest add @react-bits/Beams-JS-TW` = ini sudah di install dan ada di components\Beams.jsx
    - Pemasangan Komponen Latar Belakang Hero Section: `npx shadcn@latest add @react-bits/LightRays-JS-TW` = ini sudah di install dan ada di components\LightRays.jsx
    - Pemasangan Komponen Dekoratif Tambahan: Komponen interaktif premium berkinerja ringan diintegrasikan dengan konfigurasi durasi transisi cepat untuk mempertahankan kesan mewah, minimalis, dan tidak berlebihan (*non-tacky luxury style*).
  - **Tambahan:** gunakan smooth scrolling atau animasi scrolling lainnya, pastikan responsitivitas atau mobile view, buatkan semuanya premium & luxury style!

- **Optimisasi Performa & Aset:**
  - **Gambar:** Seluruh gambar atau aset grafis wajib menggunakan komponen `next/image` dengan format WebP atau AVIF modern. Wajib menentukan spesifikasi dimensi `width`, `height`, dan `aspect-ratio` eksplisit. Menggunakan *shimmer effect skeleton loader* selama proses pemuatan gambar latar belakang atau kartu produk berlangsung.
  - **Video Showcase:** Dilarang keras menyimpan berkas video mentah (*raw mp4*) di dalam repositori lokal atau direktori publik lokal. Seluruh video demonstrasi produk atau portofolio di-host pada platform CDN eksternal (YouTube Enterprise / Cloudinary). Pemuatan menggunakan pemutar iframe standar yang menerapkan parameter pengoptimalan `loading="lazy"` serta konfigurasi pemuatan tertunda (*deferred loading*).
  - **Pemisahan Kode (Code Splitting):** Komponen interaktif yang berat seperti modal portofolio, formulir validasi mendalam, dan elemen animasi tingkat lanjut dimuat menggunakan fungsi `dynamic()` dari Next.js dengan opsi `ssr: false` agar bundle utama berukuran sangat kecil (< 80kb pertama).

- **Infrastruktur & Deployment:**
  - Target Platform: Vercel Free Tier atau Railway Free Tier dengan konfigurasi pipeline CI/CD otomatis yang terhubung ke repositori GitHub cabang `main`.
  - Manajemen Caching: Memanfaatkan fitur Incremental Static Regeneration (ISR) untuk halaman portofolio dan artikel hukum guna memangkas waktu respons server hingga kurang dari 50 milidetik.

---

## 3. SPESIFIKASI KOMPONEN STRUKTURAL UI/UX

### A. Navigasi / Navbar
- **Tipe:** Sticky Glassmorphism Menu dengan tingkat transparansi tinggi.
- **Styling:** `bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-900/80 sticky top-0 z-50 transition-all duration-300`
- **Struktur Navigasi:**
  - Kiri: Logo `websiteln` menggunakan tipografi Serif modern, warna emas (`text-amber-500/90 font-bold tracking-wider`).
  - Tengah (Desktop Nav): 
    - Layanan (`#services`)
    - Portofolio (`#portfolio`)
    - Paket Harga (`#pricing`)
    - FAQ (`#faq`)
  - Kanan (Desktop CTA): Tombol "Hubungi Kami" (`bg-amber-500 text-zinc-950 font-medium tracking-wide hover:bg-amber-400 transition-colors duration-200 py-2 px-5 rounded-sm text-sm`)
  - Mobile Menu: Menggunakan komponen Shadcn Sheet (Slide-out Right) dengan animasi transisi pegas (*spring transition*) tanpa menyebabkan pergeseran komponen utama lainnya.

### B. Hero Section
- **Layout:** Centered Minimalist Typography dikombinasikan dengan grid halus bernuansa futuristik halus di latar belakang.
- **Copywriting:**
  - Header Kecil (Sub-tag): "PREMIUM DIGITAL HOUSE & AUTOMATION ARCHITECT" (`text-xs text-amber-500/80 tracking-[0.3em] uppercase font-semibold mb-4`)
  - Heading Utama: "Transformasi Digital Tanpa Batas. Elevasi Bisnis Anda dengan Arsitektur Kode Kelas Dunia." (`text-4xl md:text-6xl font-light text-zinc-100 tracking-tight leading-tight max-w-4xl`)
  - Sub-Heading: "Kami membangun aplikasi instan berbasis teknologi modern, modernisasi sistem legacy, dan merancang otomatisasi berbasis kecerdasan buatan. Dilengkapi sistem langganan pemeliharaan premium untuk memastikan platform Anda selalu relevan, aman, dan berkinerja tinggi setiap saat." (`text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mt-6`)
  - Aksi CTA Utama: Tombol "Mulai Konsultasi Projek" yang mengarahkan fokus pengguna ke bagian formulir pemesanan.
  - Aksi CTA Sekunder: Tombol "Lihat Katalog Portofolio" dengan gaya outline transparan aksen emas yang menggulir halaman ke bagian portofolio.
- **Visual:** Latar belakang menggunakan gradasi warna `bg-zinc-950` dengan aksen titik-titik radial (*radial grid pattern*) redup berwarna emas gelap (`rgba(245, 158, 11, 0.03)`).

### C. Statistik Bisnis / Countdown Section
- **Komponen:** Panel hitung maju statis dan animasi peningkatan angka (*counter up animation*) menggunakan Framer Motion inView trigger.
- **Data Teks & Nilai:**
  - Angka: `47+` | Label: "Projek Enterprise Selesai"
  - Angka: `18` | Label: "Sistem Otomasi Python Aktif"
  - Angka: `99.9%` | Label: "Waktu Aktif Server Klien Terjaga"
  - Angka: `24/7` | Label: "Dukungan Pemeliharaan Premium"
- **Styling:** Grid 4 kolom pada desktop, border pembatas tipis (`border-zinc-900`), teks angka berwarna emas cerah (`text-amber-400 font-light text-3xl md:text-4xl`).

### D. Bagian Layanan / Fitur (Services)
- **Layout:** Grid Responsif (1 Kolom Mobile, 3 Kolom Desktop).
- **Mapping Konten Layanan:**
  1. **Pengembangan Aplikasi Modern & Legacy**
     - Deskripsi: Pembuatan aplikasi web instan dengan teknologi mutakhir atau kustomisasi dan migrasi sistem lama berbasis CodeIgniter atau arsitektur serupa. Siap dikembangkan hingga tahap penyebaran server produksi (deployment).
  2. **Otomasi Proses Bisnis & Integrasi AI**
     - Deskripsi: Eliminasi tugas repetitif menggunakan skrip otomatisasi Python cerdas, pengikisan data web (web scraping) berskala besar, serta integrasi sistem kecerdasan buatan berbasis Retrieval-Augmented Generation (RAG) untuk asisten pintar perusahaan Anda.
  3. **Layanan Langganan Pemeliharaan Elit (Unique Selling Point)**
     - Deskripsi: Solusi komprehensif pasca-pengembangan. Tim pengembang websiteln mengelola pembaruan konten, pengelolaan kode, pemantauan serta perpanjangan hosting, hingga penyesuaian fungsionalitas berkala agar bisnis Anda berjalan tanpa gangguan teknis.

### E. Bagian Portofolio / Galeri Media (Mekanisme Pemisahan Data Terdekopel)
- **Arsitektur Teknis Data:** Data portofolio tidak boleh di-hardcode di dalam file komponen UI. Seluruh data wajib disimpan dalam file terpisah `src/data/portfolio-items.ts` dengan format struktur skema JSON data sebagai berikut:

```typescript
export interface PortfolioItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  techStack: string[];
  thumbnailUrl: string;
  mediaGallery: string[];
  externalVideoUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "proj-001",
    title: "Sistem Manajemen Logistik Terintegrasi",
    shortDescription: "Aplikasi web instan untuk optimalisasi rute dan otomatisasi data manifes gudang.",
    detailedDescription: "Pengembangan sistem manajemen logistik skala enterprise yang mengintegrasikan otomatisasi pengikisan data manifest eksternal menggunakan Python, serta migrasi basis data dari arsitektur lama berbasis CodeIgniter ke arsitektur modern berkinerja tinggi.",
    techStack: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
    thumbnailUrl: "[https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80)",
    mediaGallery: [
      "[https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80)",
      "[https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80)"
    ],
    externalVideoUrl: "[https://www.youtube.com/embed/dQw4w9WgXcQ](https://www.youtube.com/embed/dQw4w9WgXcQ)"
  },
  {
    id: "proj-002",
    title: "Mesin Otomasi Data Pasar & Integrasi RAG",
    shortDescription: "Sistem penambangan data web real-time yang terhubung ke model bahasa besar korporat.",
    detailedDescription: "Sebuah platform otomasi penuh untuk mengumpulkan data dari berbagai bursa internasional menggunakan teknik web scraping terdistribusi tinggi, kemudian disalurkan ke mesin AI dengan arsitektur RAG untuk analisis sentimen pasar instan.",
    techStack: ["Python", "Scrapy", "LangChain", "Supabase", "Next.js"],
    thumbnailUrl: "[https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80)",
    mediaGallery: [
      "[https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80)"
    ]
  }
];
```

**Logika Interaksi Modal:**

- **Pengguna mengklik judul atau gambar mini (thumbnail) kartu portofolio.**
- **State manager menangkap id item dan membuka Dialog/Modal kontainer (Shadcn UI Dialog Component).**

**Tata Letak Layout Modal (Split 2-Column pada Layar Besar):**

- **Kolom Kiri (Lebar 60%):** Menampilkan Judul Proyek (`text-2xl font-light text-zinc-100`), Deskripsi Mendalam Proyek (`text-sm leading-relaxed text-zinc-400`), dan deretan lencana komponen teknologi (Tech Stack Badges) (`bg-zinc-900 text-amber-400 border border-zinc-800 text-xs py-1 px-2.5 rounded-sm`).
- **Kolom Kanan (Lebar 40%):** Menampilkan Komponen Komidi Putar (Image Slider Gallery) untuk berpindah antar gambar proyek menggunakan kontrol navigasi presisi tinggi, atau jika data externalVideoUrl tersedia di dalam skema JSON, merender pemutar Iframe YouTube dengan parameter optimisasi performa penundaan beban.

### F. Bagian Paket Jasa & Strategi Penjualan (Pricing Matrix)
- **Pendekatan Penjualan:** Pembagian harga dipisah secara modular untuk memberikan fleksibilitas kepada klien. Paket pengembangan bertindak sebagai investasi awal, sedangkan paket pemeliharaan (Maintenance Subscription) diposisikan sebagai fondasi jangka panjang wajib demi keberlangsungan ekosistem digital mereka.

**Struktur Paket Komprehensif:**

| Nama Paket | Fokus Layanan | Estimasi Harga (Wajar Enterprise) | Fitur Utama | Aksi CTA Otomatis (WhatsApp Template) |
|---|---|---|---|---|
| Instant Modern Architecture | Pengembangan Web / Aplikasi Instan | Rp 15.000.000 (Satu Kali) | Stack Modern Next.js/Tailwind v4, UI/UX Premium, Optimisasi SEO Penuh, Penyerahan File Deployment Server | Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Instant Modern Architecture untuk proyek digital bisnis saya. |
| Intelligent Automation & AI | Otomasi Python, Web Scraping, RAG Chatbot | Rp 22.500.000 (Satu Kali) | Skrip Otomasi Tugas Repetitif, Pipeline Penambangan Data, Integrasi API AI Model, Dasbor Pemantauan Data | Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Intelligent Automation & AI untuk optimalisasi efisiensi bisnis saya. |
| Legacy Modernization & Custom | Pembaruan Sistem Lama / Kustomisasi | Rp 18.000.000 (Satu Kali) | Refactoring Arsitektur Lama (misal CodeIgniter), Pembersihan Celah Keamanan, Integrasi API Baru, Optimisasi Kinerja Database | Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Legacy Modernization & Custom untuk memperbarui infrastruktur IT kami. |
| Elite Care Subscription | Pemeliharaan Ekosistem Digital Penuh | Rp 2.500.000 (Per Bulan) | Pembaruan Konten Rutin, Perpanjangan & Pemantauan Hosting, Penanganan Bug Developer Cepat, Backup Data Berkala | Halo websiteln, saya ingin berlangganan Paket Elite Care Subscription untuk mengamankan dan merawat seluruh platform digital kami. |

**Logika Alur Pengiriman Pesan:** Ketika tombol "Pilih Paket" ditekan pada salah satu kartu harga di atas, sistem secara otomatis mengeksekusi fungsi generator string tautan untuk membuka tab baru yang mengarah langsung ke API WhatsApp resmi (https://wa.me/628xxxxxxxxxx?text=[encoded_template_text]).

### G. Bagian FAQ (Pertanyaan yang Sering Diajukan)
**Komponen:** Menggunakan komponen semantik Shadcn/ui Accordion dengan tipe perluasan tunggal (type="single" collapsible).

**Data Teks FAQ:**

**Apakah websiteln bisa membantu mengelola website yang dibangun dengan teknologi lama seperti CodeIgniter?**

**Jawaban:** Tentu saja. Kami memiliki keahlian mendalam baik pada arsitektur modern berbasis Next.js maupun arsitektur warisan seperti CodeIgniter 3. Kami dapat melakukan pemeliharaan rutin, penambahan fitur baru, hingga perbaikan performa kode lama Anda.

**Bagaimana sistem kerja Paket Langganan Pemeliharaan (Elite Care Subscription)?**

**Jawaban:** Melalui program langganan ini, tim pengembang kami bertindak sebagai departemen IT eksternal Anda. Kami mengurus pembaruan konten, memantau kinerja infrastruktur, mengelola perpanjangan hosting/domain, serta langsung menangani perbaikan jika terjadi kendala teknis tanpa biaya tambahan di luar biaya bulanan.

**Apakah biaya paket pengembangan sudah termasuk proses deployment ke server publik?**

**Jawaban:** Ya, seluruh paket pengembangan aplikasi kami sudah mencakup konfigurasi pipeline CI/CD hingga aplikasi Anda berjalan dengan sempurna di server produksi publik seperti Vercel, Railway, atau VPS pilihan Anda.

**Bagaimana keamanan data terjaga pada proyek otomasi pengikisan data web (web scraping)?**

**Jawaban:** Kami membangun skrip otomatisasi Python dengan mematuhi protokol keamanan data tingkat tinggi dan etika pengambilan data web. Seluruh data hasil ekstraksi disimpan dengan enkripsi penuh di lingkungan database yang aman dan terisolasi.

### H. Bagian Lead Capture & Formulir Kontak (Kontak Email + React Bits Beams)
**Efek Latar Belakang:** Dibungkus dalam komponen kontainer interaktif @react-bits/Beams-JS-TW untuk menampilkan partikel cahaya dinamis yang elegan pada area latar belakang form kontak.

**Komponen Formulir:**

**Field Input:** Nama Lengkap (type="text"), Alamat Email (type="email"), Nama Perusahaan (type="text"), Pilihan Layanan (type="select"), Deskripsi Kebutuhan Projek (type="textarea").

**Validasi Status Proyek:** Menggunakan pustaka penanganan formulir yang ringan untuk memeriksa kevalidan isi email. Menyediakan penampung status memuat (loading state) pada tombol kirim dengan menonaktifkan klik ganda selama proses transmisi data berlangsung.

**Mekanisme Pengiriman:** Data dienkapsulasi menjadi string URL parameter yang dikirim melalui skema penanganan kiriman surat tradisional dengan subjek terstruktur kaku: [PROSPEK NEW] Pengajuan Projek Websiteln - [Nama Perusahaan].

### I. Widget Kontak Mengambang (Floating WhatsApp Bubble)
**Penempatan Komponen:** Berada di koordinat tetap pojok kanan bawah layar (fixed bottom-6 right-6 z-40).

**Spesifikasi Efek Animasi:** Menggunakan Framer Motion untuk efek denyut konstan yang halus (animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}).

**Template Pesan Tautan:**
**Apabila widget ini diklik secara langsung tanpa melalui kartu paket harga, tautan WhatsApp akan memuat teks templat universal berikut:**
Halo min, saya ingin berkonsultasi mengenai kebutuhan jasa pengembangan IT dan otomasi untuk bisnis saya.

### J. Bagian Footer & Salinan Teks Hukum (Legal Teks Lengkap)
**Kolom Tata Letak:**

**Kolom 1:** Profil ringkas websiteln, visi menjadi penyedia solusi otomasi dan rekayasa web terpercaya di Indonesia.

**Kolom 2:** Tautan navigasi internal cepat halaman.

**Kolom 3:** Informasi saluran komunikasi resmi bisnis (Email korporat, Lokasi operasional kantor di Kota Serang, Banten).

**Bagian Teks Hukum Terintegrasi Penuh (Menghindari Penggunaan Tautan Kosong):**

**Kebijakan Privasi (Privacy Policy):** "websiteln berkomitmen penuh untuk melindungi privasi data operasional klien kami. Seluruh informasi yang dikirimkan melalui formulir kontak atau data hasil eksekusi otomasi web scraping disimpan dalam enkripsi server yang ketat dan tidak akan pernah didistribusikan kepada pihak ketiga tanpa persetujuan tertulis secara legal."

**Ketentuan Layanan (Terms of Service):** "Layanan pengembangan perangkat lunak yang disediakan oleh websiteln beroperasi berdasarkan ruang lingkup kerja yang disepakati bersama dalam dokumen kontrak tertulis. Paket langganan pemeliharaan Elite Care dapat dibatalkan kapan saja dengan pemberitahuan minimal 14 hari sebelum siklus penagihan bulan berikutnya berjalan."

**Pemberitahuan Hak Cipta:** Copyright © 2026 websiteln. Seluruh Hak Cipta Dilindungi Undang-Undang.

### 4. POLA STRUKTUR DIREKTORI
Struktur folder modular berbasis Next.js 16 App Router dengan arsitektur bersih yang mengisolasikan manajemen data dan komponen visual premium tanpa risiko tumpang tindih:

```bash
src/
├── app/
│   ├── layout.tsx             # Root layout dengan injeksi Metadata SEO & JSON-LD Skema
│   ├── page.tsx               # Komponen Utama Landing Page Konsolidasi
│   ├── globals.css            # Konfigurasi Tailwind CSS v4 Global dan Direktif @theme
│   └── sitemap.ts             # Generator Otomatis Berkas XML Sitemap untuk Google Indexing
├── components/
│   ├── ui/                    # Komponen Primitif berbasis Shadcn
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   ├── beams.tsx          # Komponen Beams-JS-TW untuk latar belakang Kontak Section
│   ├── LightRays.tsx      # Komponen LightRays-JS-TW untuk latar belakang Hero Section
│   ├── sections/              # Komponen Struktur Tata Letak Halaman Utama
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── stats.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx      # Mengimplementasikan logika pemetaan JSON dan Dialog Modal
│   │   ├── pricing.tsx        # Penanganan matriks harga dan pembuat tautan paket WhatsApp
│   │   ├── faq.tsx
│   │   ├── contact-form.tsx   # Penanganan form kontak dengan efek Beams
│   │   └── footer.tsx         # Memuat teks legalitas lengkap
│   └── whatsapp-bubble.tsx    # Komponen mengambang interaktif pojok kanan bawah
├── data/
│   └── portfolio-items.ts     # Sumber Data JSON Terdekopel untuk Seluruh Item Galeri
├── hooks/
│   └── use-counter.ts         # Animasi counter up angka untuk bagian statistik
└── lib/
    └── utils.ts               # Fungsi utilitas penggabungan kelas CSS Tailwinds
```
