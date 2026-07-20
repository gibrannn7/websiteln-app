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
    title: "VNG Coffeebar Digital Platform",
    shortDescription: "Sistem informasi web dan katalog interaktif kustom untuk manajemen kafe.",
    detailedDescription: "Pengembangan platform web modern untuk VNG Coffeebar guna mendigitalisasi operasional kafe. Menampilkan menu interaktif, integrasi kontak pesanan langsung, serta branding estetika visual yang kuat.",
    techStack: ["React", "Tailwind", "Reactbits"],
    thumbnailUrl: "/portfolio/Vng-Coffeebar/1.jpg",
    mediaGallery: Array.from({ length: 12 }, (_, i) => `/portfolio/Vng-Coffeebar/${i + 1}.jpg`),
    externalVideoUrl: "https://www.youtube.com/embed/gtZ1ELD-qPs"
  },
  {
    id: "proj-002",
    title: "Procurement Mobile System",
    shortDescription: "Aplikasi mobile pelacakan pengadaan barang dan approval operasional.",
    detailedDescription: "Aplikasi seluler berkinerja tinggi untuk mengelola alur pengadaan barang (procurement) perusahaan. Mempercepat proses pengajuan dari lapangan hingga sistem persetujuan (approval) manajemen secara mobile.",
    techStack: ["Flutter", "Dart", "Laravel", "MySQL"],
    thumbnailUrl: "/portfolio/Procurement-Mobile/1.jpg",
    mediaGallery: Array.from({ length: 42 }, (_, i) => `/portfolio/Procurement-Mobile/${i + 1}.jpg`)
  },
  {
    id: "proj-003",
    title: "Interactive Valentine Web Engine",
    shortDescription: "Aplikasi web interaktif bertema khusus dengan micro-interactions dinamis.",
    detailedDescription: "Proyek web kreatif kustom penuh interaksi dinamis untuk menciptakan pengalaman digital personal yang unik. Berfokus pada kehalusan animasi, transisi visual, serta musik latar yang responsif saat diakses.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
    thumbnailUrl: "/portfolio/Valentine/1.png",
    mediaGallery: Array.from({ length: 6 }, (_, i) => `/portfolio/Valentine/${i + 1}.png`),
    externalVideoUrl: "https://www.youtube.com/embed/crZyXrsVwm8"
  },
  {
    id: "proj-004",
    title: "E-Perpus (Digital Library)",
    shortDescription: "Sistem manajemen perpustakaan digital untuk kemudahan akses dan sirkulasi buku.",
    detailedDescription: "Aplikasi manajemen perpustakaan modern yang mempermudah katalogisasi, pelacakan peminjaman buku, otomatisasi denda keterlambatan, hingga pembacaan buku digital secara instan.",
    techStack: ["CodeIgniter 3", "Bootstrap", "MySQL"],
    thumbnailUrl: "/portfolio/E-Perpus/1.jpg",
    mediaGallery: Array.from({ length: 18 }, (_, i) => `/portfolio/E-Perpus/${i + 1}.jpg`)
  },
  {
    id: "proj-005",
    title: "PLN Pay Mobile Application",
    shortDescription: "Aplikasi seluler terintegrasi untuk kemudahan pembayaran dan token listrik.",
    detailedDescription: "Aplikasi mobile kustom yang dirancang untuk mempercepat transaksi digital, mulai dari pembelian token listrik, pembayaran tagihan bulanan, hingga histori penggunaan daya secara real-time.",
    techStack: ["Flutter", "Dart", "Laravel", "MySQL"],
    thumbnailUrl: "/portfolio/Pln-Pay/1.jpg",
    mediaGallery: Array.from({ length: 10 }, (_, i) => `/portfolio/Pln-Pay/${i + 1}.jpg`)
  },
  {
    id: "proj-006",
    title: "SIBINA AI Chatbot Assistant",
    shortDescription: "Asisten virtual cerdas berbasis AI untuk otomatisasi layanan informasi.",
    detailedDescription: "Chatbot pintar yang dikonfigurasi menggunakan kecerdasan buatan untuk menjawab pertanyaan pelanggan secara otomatis 24/7, mengolah maksud pesan (intent), dan mempercepat respon layanan informasi.",
    techStack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript"],
    thumbnailUrl: "/portfolio/SIbina-Ai/1.jpg",
    mediaGallery: Array.from({ length: 4 }, (_, i) => `/portfolio/SIbina-Ai/${i + 1}.jpg`)
  },
  {
    id: "proj-007",
    title: "E-Campus Student Ecosystem",
    shortDescription: "Platform transformasi digital kampus terintegrasi untuk akademik dan administrasi.",
    detailedDescription: "Sebuah ekosistem digital menyeluruh yang memadukan seluruh kegiatan akademik, layanan administrasi, dan interaksi lingkungan kampus dalam satu platform terpusat guna mewujudkan smart campus modern.",
    techStack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    thumbnailUrl: "/portfolio/E-Campus Demo/1.jpg",
    mediaGallery: [
      "/portfolio/E-Campus Demo/1.jpg", 
      "/portfolio/E-Campus Demo/2.png"
    ]
  },
  {
    id: "proj-008",
    title: "My UNIBA - Portal PMB",
    shortDescription: "Web aplikasi resmi pendaftaran mahasiswa baru dengan alur seleksi online.",
    detailedDescription: "Aplikasi web pendaftaran mahasiswa baru untuk universitas. Mengotomatisasi jalur seleksi berkas, verifikasi pembayaran biaya pendaftaran, hingga pengumuman kelulusan calon mahasiswa.",
    techStack: ["Next.js", "TypeScript", "Laravel", "MySQL"],
    thumbnailUrl: "/portfolio/Myuniba Demo/1.jpg",
    mediaGallery: Array.from({ length: 9 }, (_, i) => `/portfolio/Myuniba Demo/${i + 1}.jpg`)
  },
  {
    id: "proj-009",
    title: "E-Commerce Niceso Online Store",
    shortDescription: "Platform e-commerce interaktif dengan fitur keranjang belanja dan checkout dinamis.",
    detailedDescription: "Pengembangan toko online modern yang dirancang dengan antarmuka yang sangat user-friendly. Memiliki fitur manajemen produk, keranjang belanja real-time, hingga proses checkout yang mulus untuk kenyamanan transaksi pelanggan.",
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "Midtrans"],
    thumbnailUrl: "/portfolio/Ecommerce Niceso Demo/1.jpg",
    mediaGallery: Array.from({ length: 6 }, (_, i) => `/portfolio/Ecommerce Niceso Demo/${i + 1}.jpg`)
  },
  {
    id: "proj-010",
    title: "Sistem Informasi Manajemen Magang",
    shortDescription: "Portal monitoring dan pelaporan aktivitas magang mahasiswa terintegrasi.",
    detailedDescription: "Sistem aplikasi kustom untuk mengelola administrasi magang, mulai dari pengajuan tempat, monitoring logbook harian, absensi berbasis lokasi, hingga penilaian akhir dari pembimbing lapangan.",
    techStack: ["PHP", "Codeigniter 3", "MySQL", "Bootstrap", "Whatsapp", ""],
    thumbnailUrl: "/portfolio/Aplikasi Magang/1.jpg",
    mediaGallery: Array.from({ length: 18 }, (_, i) => `/portfolio/Aplikasi Magang/${i + 1}.jpg`)
  },
  {
    id: "proj-011",
    title: "Wifiskripsi - Platform Otomasi Data",
    shortDescription: "Sistem monitoring jaringan Wifi pintar dan ekstraksi pipeline data riset akademik.",
    detailedDescription: "Pengembangan web aplikasi kustom terintegrasi untuk mengotomatisasi pemantauan stabilitas jaringan nirkabel, pencatatan log autentikasi pengguna secara real-time, serta visualisasi analitik pipeline data guna mendukung efisiensi riset teknologi informasi.",
    techStack: ["FastAPI", "Python", "Flutter", "Dart", "MySQL", "Midtrans", "Rest API"],
    thumbnailUrl: "/portfolio/wifiskripsi/1.jpg",
    mediaGallery: Array.from({ length: 5 }, (_, i) => `/portfolio/wifiskripsi/${i + 1}.jpg`)
  },
  {
    id: "proj-012",
    title: "myRamadhan",
    shortDescription: "Aplikasi seluler pendamping ibadah terintegrasi dengan fitur jurnal refleksi analitik.",
    detailedDescription: "Platform pendamping ibadah Ramadhan kustom yang komprehensif. Menghadirkan otomatisasi waktu adzan koordinat dinamis, penjejak (tracker) konsistensi salat wajib, Al-Qur'an digital, kalkulator sedekah, counter tasbih interaktif, hingga jurnal refleksi harian guna mengoptimalkan manajemen spiritual pengguna.",
    techStack: ["Flutter", "Dart", "Rest API", "Quran API"],
    thumbnailUrl: "/portfolio/myRamadhan/1.jpg",
    mediaGallery: Array.from({ length: 5 }, (_, i) => `/portfolio/myRamadhan/${i + 1}.jpg`)
  }
];