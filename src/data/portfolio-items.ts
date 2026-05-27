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
    thumbnailUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    ],
    externalVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "proj-002",
    title: "Mesin Otomasi Data Pasar & Integrasi RAG",
    shortDescription: "Sistem penambangan data web real-time yang terhubung ke model bahasa besar korporat.",
    detailedDescription: "Sebuah platform otomasi penuh untuk mengumpulkan data dari berbagai bursa internasional menggunakan teknik web scraping terdistribusi tinggi, kemudian disalurkan ke mesin AI dengan arsitektur RAG untuk analisis sentimen pasar instan.",
    techStack: ["Python", "Scrapy", "LangChain", "Supabase", "Next.js"],
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-003",
    title: "Portal Otomasi & Ekstraksi Data Pasar Keuangan",
    shortDescription: "Sistem pengikisan data pasar bursa global dengan analitik visual real-time.",
    detailedDescription: "Rancang bangun arsitektur data terdistribusi menggunakan Python dan Celery untuk mengumpulkan data likuiditas pasar modal dari berbagai bursa luar negeri, disajikan pada dasbor analisis visual yang dibangun dengan Next.js.",
    techStack: ["Python", "Celery", "FastAPI", "Next.js", "Tailwind CSS"],
    thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-004",
    title: "Modernisasi & Migrasi E-Commerce Legacy",
    shortDescription: "Pembaruan arsitektur toko online grosir dari CodeIgniter 3 ke Next.js 16.",
    detailedDescription: "Refactoring arsitektur backend legacy untuk meningkatkan kestabilan performa transaksi, peningkatan load-speed hingga di bawah 1 detik, serta integrasi multi-payment gateway untuk pemesanan tingkat nasional.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-005",
    title: "Aplikasi Manajemen Aset Mobile Cross-Platform",
    shortDescription: "Aplikasi seluler berkinerja tinggi untuk pemantauan stok pergudangan real-time.",
    detailedDescription: "Rancang bangun aplikasi mobile untuk sistem iOS dan Android menggunakan framework modern dengan fitur pemindaian QR Code terenkripsi secara real-time yang menyinkronkan data stok langsung ke database pusat perusahaan.",
    techStack: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-006",
    title: "Mesin Otomasi Data Ekstraksi Finansial",
    shortDescription: "Skrip otomatisasi data keuangan harian yang aman dari otoritas bursa luar negeri.",
    detailedDescription: "Pengembangan skrip Python terjadwal secara mandiri untuk mengekstrak data pasar keuangan internasional secara harian, memvalidasi integritas data, serta menyimpan informasi ke server terisolasi dengan perlindungan keamanan penuh.",
    techStack: ["Python", "BeautifulSoup", "Pandas", "PostgreSQL", "FastAPI"],
    thumbnailUrl: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-007",
    title: "Sistem Asisten Pengetahuan AI RAG Korporat",
    shortDescription: "Asisten cerdas internal perusahaan untuk menjawab kueri dokumen operasional.",
    detailedDescription: "Integrasi model bahasa besar dengan database vektor Supabase untuk membuat asisten kognitif internal yang mampu memetakan, mencari, dan merangkum berkas operasional PDF/Excel korporasi secara instan dan rahasia.",
    techStack: ["OpenAI API", "LangChain", "Supabase", "Next.js", "Tailwind CSS"],
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-008",
    title: "Redesign Landing Page Premium & Otomasi Prospek",
    shortDescription: "Pembaruan tampilan website pemasaran kelas atas dengan fokus konversi tinggi.",
    detailedDescription: "Transformasi visual landing page perusahaan jasa dengan mengintegrasikan estetika luxury modern, micro-interactions, serta formulir lead capture otomatis yang menyalurkan data prospek secara aman ke sistem manajemen internal.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-009",
    title: "Otomasi Pengujian & Quality Assurance Mobile",
    shortDescription: "Skrip otomatisasi pengujian berbasis cloud untuk aplikasi seluler skala enterprise.",
    detailedDescription: "Rancang bangun pipeline CI/CD dengan skrip otomatisasi pengujian mobile menggunakan Appium untuk menjamin fungsionalitas aplikasi bebas bug di ratusan tipe perangkat secara paralel.",
    techStack: ["Python", "Appium", "Pytest", "Docker", "Jenkins"],
    thumbnailUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-010",
    title: "Dashboard Sistem Informasi & Data Analytics Enterprise",
    shortDescription: "Dasbor analitik interaktif real-time untuk pemantauan performa bisnis multi-cabang.",
    detailedDescription: "Pembangunan platform analisis data korporasi terintegrasi yang menyatukan data dari puluhan server cabang menjadi wawasan visual interaktif demi mendukung keputusan strategis jajaran direksi secara instan.",
    techStack: ["Next.js", "FastAPI", "Python", "Pandas", "PostgreSQL"],
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-011",
    title: "Engine Pengikisan Data E-Commerce Global",
    shortDescription: "Pipeline crawling data harga dan ketersediaan stok produk e-commerce internasional secara berkala.",
    detailedDescription: "Sistem ekstraksi informasi web terdistribusi yang memantau jutaan halaman produk e-commerce kompetitor luar negeri setiap harinya, dilengkapi dengan analisis tren perubahan harga pasar.",
    techStack: ["Python", "Scrapy", "Redis", "Elasticsearch", "Next.js"],
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-012",
    title: "Portal Pelayanan Publik & Integrasi Pembayaran Digital",
    shortDescription: "Transformasi layanan administrasi digital dengan sistem verifikasi data otomatis.",
    detailedDescription: "Rancang bangun portal layanan publik berbasis web yang mengotomasi verifikasi kelayakan administrasi pengguna secara real-time dan terhubung ke gateway transaksi digital terpercaya nasional.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    thumbnailUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    mediaGallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
