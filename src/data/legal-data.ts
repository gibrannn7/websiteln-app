// src/data/legal-data.ts

export interface LegalDocument {
  title: string;
  desc: string;
}

export const legalData: Record<"privacy" | "terms", LegalDocument> = {
  privacy: {
    title: "Kebijakan Privasi (Privacy Policy)",
    desc: "WEBSITELN berkomitmen mutlak terhadap keamanan dan kerahasiaan data klien kami. Kebijakan ini mengatur secara transparan bagaimana kami mengelola informasi dalam setiap fase pengembangan arsitektur web dan rekayasa perangkat lunak.\n\n1. Pengumpulan & Isolasi Data: Kami hanya memproses data operasional yang esensial melalui formulir konsultasi dan sesi analisis kebutuhan. Data proyek, kredensial server, hingga parameter otomasi Python diisolasi secara ketat per klien.\n\n2. Standar Enkripsi: Seluruh arsip komunikasi dan lalu lintas data ekstraksi (web scraping) disimpan menggunakan standar enkripsi industri. Infrastruktur server (Next.js/Vercel/Netlify) yang kami gunakan menjamin perlindungan terhadap akses yang tidak sah.\n\n3. Non-Distribusi & Kerahasiaan: Kami tidak akan pernah menjual, menyewakan, atau mengekspos kode sumber (source code) rahasia, algoritma kustom, maupun basis data pengguna kepada pihak ketiga tanpa otorisasi tertulis secara legal. Kepercayaan Anda adalah fondasi utama kami.",
  },
  terms: {
    title: "Ketentuan Layanan (Terms of Service)",
    desc: "Layanan rekayasa sistem digital dan penyediaan infrastruktur IT oleh WEBSITELN beroperasi di bawah prinsip transparansi, efisiensi, dan spesifikasi teknis yang terukur.\n\n1. Terminologi Pembayaran: Eksekusi pengembangan sistem (Website Program Kerja KKM, Sistem Tugas Akhir, atau Otomasi Bisnis) diinisiasi pasca-validasi arsitektur dan pembayaran uang muka (DP) sebesar 50%. Pelunasan sisa 50% wajib diselesaikan setelah sistem berstatus produksi (100% fungsional) dan siap diserahterimakan.\n\n2. Skalabilitas & Biaya Siluman: Sesuai dengan penawaran kami, paket dasar seperti Web Profil KKM mencakup domain (.my.id) dan hosting tanpa biaya perpanjangan server bulanan yang disembunyikan. Klien berhak atas efisiensi anggaran jangka panjang.\n\n3. Ruang Lingkup Revisi: Setiap kontrak mencakup kuota perbaikan antarmuka minor (UI/UX) dan penyesuaian teks. Perombakan logika inti sistem (core logic) atau penambahan entitas basis data di luar dokumen kesepakatan awal akan diklasifikasikan sebagai eskalasi fitur dan dikenakan biaya tambahan.\n\n4. Hak Guna & Kepemilikan: Pasca-pelunasan, klien memegang hak guna penuh atas produk akhir dan seluruh data operasional yang berjalan di dalamnya. WEBSITELN berhak menggunakan tampilan visual (non-data sensitif) sebagai katalog portofolio, kecuali terdapat perjanjian rahasia (NDA) khusus.",
  },
};