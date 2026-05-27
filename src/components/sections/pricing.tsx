"use client";

import React, { useState } from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PricingPackage {
  name: string;
  focus: string;
  price: string;
  period: string;
  features: string[];
  waMessage: string;
  isPopular?: boolean;
  detailedSpecs: string;
}

export const Pricing: React.FC = () => {
  const [selectedSpecs, setSelectedSpecs] = useState<PricingPackage | null>(null);

  const packages: PricingPackage[] = [
    {
      name: "Instant Modern Architecture",
      focus: "Pengembangan Web / Aplikasi Instan",
      price: "Rp 15.000.000",
      period: "Satu Kali",
      features: [
        "Stack Modern Next.js & Tailwind CSS v4",
        "Tampilan UI/UX Premium & Eksklusif",
        "Optimisasi SEO On-Page Penuh",
        "Penyerahan File & Deployment Server Produksi",
        "Integrasi Peta / Lokasi & Kontak Hub",
        "Proteksi Celah Keamanan Dasar (Basic SSL Setup)",
        "Garansi Pemeliharaan Pasca Rilis (30 Hari Pertama)",
      ],
      waMessage:
        "Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Instant Modern Architecture untuk proyek digital bisnis saya.",
      detailedSpecs:
        "Paket ini dirancang untuk pemilik usaha atau startup founder yang membutuhkan produk minimum layak (MVP) siap rilis dalam waktu singkat dengan arsitektur modern berkecepatan tinggi. Kami membangun antarmuka pengguna kelas dunia dan memastikan kesiapan server untuk menampung prospek operasional secara instan.",
    },
    {
      name: "Intelligent Automation & AI",
      focus: "Otomasi Python, Web Scraping, RAG Chatbot",
      price: "Rp 22.500.000",
      period: "Satu Kali",
      features: [
        "Skrip Otomasi Tugas Repetitif & Rutin",
        "Pipeline Ekstraksi Data Web Berskala Besar",
        "Integrasi API AI Model (LLM / RAG)",
        "Dasbor Interaktif Pemantauan Data & Eksekusi",
        "Laporan Analisis & Ekspor Format Excel/CSV",
        "Konfigurasi Cron Job & Scheduler Otomatis",
        "Notifikasi Alert Sistem via Email/Telegram",
      ],
      waMessage:
        "Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Intelligent Automation & AI untuk optimalisasi efisiensi bisnis saya.",
      detailedSpecs:
        "Solusi otomasi lengkap untuk departemen IT atau divisi operasional perusahaan Anda. Kami melacak tugas-tugas repetitif, merancang skrip python terenkripsi penuh untuk mengekstrak data web secara berkala, dan menghubungkan platform Anda dengan asisten kecerdasan buatan berbasis model bahasa besar (LLM).",
    },
    {
      name: "Legacy Modernization & Custom",
      focus: "Pembaruan Sistem Lama / Kustomisasi",
      price: "Rp 18.000.000",
      period: "Satu Kali",
      features: [
        "Refactoring Kode Arsitektur Lama (misal CodeIgniter)",
        "Pembersihan Celah Keamanan & Audit Kerentanan",
        "Integrasi API & Protokol Komunikasi Baru",
        "Optimisasi Kinerja Database & Query",
        "Migrasi Data Tanpa Downtime Sistem",
        "Peningkatan Kapasitas Bandwidth & Compression",
        "Penyesuaian Responsivitas Tampilan Halaman",
      ],
      waMessage:
        "Halo websiteln, saya ingin berkonsultasi mengenai Jasa Paket Legacy Modernization & Custom untuk memperbarui infrastruktur IT kami.",
      detailedSpecs:
        "Refactoring total aplikasi legacy Anda ke sistem yang lebih modern dan aman. Kami mendesinfeksi kode dari celah SQL injection atau XSS, mengoptimalkan indeks database relasional agar kueri berjalan di bawah 50 milidetik, serta menjamin kontinuitas data selama migrasi.",
    },
    {
      name: "Elite Care Subscription",
      focus: "Pemeliharaan Ekosistem Digital Penuh",
      price: "Rp 2.500.000",
      period: "Per Bulan",
      isPopular: true,
      features: [
        "Pembaruan Konten Kontinu & Perbaikan Teknis",
        "Pemantauan & Perpanjangan Hosting/Domain",
        "Dukungan Developer Cepat Untuk Bug & Galat",
        "Pencadangan (Backup) Data & Kode Berkala",
        "Pengawasan Uptime Server 24/7 & Laporan Bulanan",
        "Konsultasi Strategis Optimisasi Infrastruktur Cloud",
        "Pembaruan Keamanan & Patching Sistem Rutin",
      ],
      waMessage:
        "Halo websiteln, saya ingin berlangganan Paket Elite Care Subscription untuk mengamankan dan merawat seluruh platform digital kami.",
      detailedSpecs:
        "Layanan pemeliharaan elit bulanan tepercaya. Tim pengembang kami bertindak sebagai departemen IT eksternal Anda untuk merawat seluruh aspek teknis, server, dan domain, memastikan platform bisnis berjalan tanpa interupsi teknis sedikit pun.",
    },
  ];

  const handleSelectPackage = (message: string) => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+62 817-7495-2006";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="bg-zinc-950 py-32 px-6 relative z-10">
      {/* Top seamless transition gradient mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            PAKET INVESTASI
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug max-w-2xl">
            Matriks Penawaran Jasa Transparan & Modular
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-lg mt-6 leading-relaxed">
            Pilih layanan pengembangan untuk investasi awal sistem, atau amankan platform Anda jangka panjang dengan paket pemeliharaan berkelanjutan.
          </p>
          <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const hasMoreFeatures = pkg.features.length > 5;
            const displayedFeatures = hasMoreFeatures ? pkg.features.slice(0, 5) : pkg.features;
            const extraCount = pkg.features.length - 5;

            return (
              <div
                key={index}
                className={`flex flex-col justify-between p-8 rounded-sm border transition-all duration-300 relative ${
                  pkg.isPopular
                    ? "border-gold-dark bg-zinc-900/30 shadow-xl shadow-gold-dark/5"
                    : "border-zinc-900 bg-zinc-900/10 hover:border-zinc-800"
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gold-dark text-zinc-50 text-[10px] tracking-widest uppercase font-semibold py-1.5 px-4 rounded-sm shadow-md">
                    REKOMENDASI
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-3">
                    {pkg.focus}
                  </span>
                  <h3 className="text-xl font-light text-zinc-100 tracking-wide mb-6 min-h-[56px] flex items-center leading-snug">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-8 border-b border-zinc-900/80 pb-6">
                    <span className="text-2xl md:text-3xl font-light text-gold-light">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-500 block mt-1">
                      Estimasi Harga / {pkg.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-6">
                    {displayedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs leading-relaxed text-zinc-400 font-light">
                        <Check className="h-4 w-4 text-gold-dark shrink-0 mr-2.5 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Truncated Text Trigger */}
                  {hasMoreFeatures && (
                    <button
                      onClick={() => setSelectedSpecs(pkg)}
                      className="text-xs text-gold-light hover:text-gold-dark font-semibold transition-colors duration-200 block mb-8 text-left cursor-pointer focus:outline-none"
                    >
                      + {extraCount} fungsionalitas lainnya...
                    </button>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPackage(pkg.waMessage)}
                  variant={pkg.isPopular ? "default" : "outline"}
                  className="w-full mt-4 py-3 text-xs font-semibold tracking-wider uppercase rounded-sm"
                >
                  Pilih Paket
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Modal Detail Spesifikasi Paket */}
      <Dialog open={selectedSpecs !== null} onOpenChange={(open) => !open && setSelectedSpecs(null)}>
        {selectedSpecs && (
          <DialogContent className="max-w-[90vw] sm:max-w-[550px] bg-zinc-950 border border-zinc-850 p-7 rounded-sm shadow-2xl">
            <DialogHeader className="mb-5">
              <div className="flex items-center gap-2 text-gold-light text-[10px] tracking-[0.2em] uppercase font-bold">
                <Info className="h-3.5 w-3.5" />
                Spesifikasi Detail Paket
              </div>
              <DialogTitle className="text-2xl font-light text-zinc-100 tracking-tight mt-1.5 leading-snug">
                {selectedSpecs.name}
              </DialogTitle>
            </DialogHeader>

            <DialogDescription className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
              {selectedSpecs.detailedSpecs}
            </DialogDescription>

            <div className="border-t border-zinc-900 pt-5">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mb-4 font-semibold">
                Seluruh Cakupan Fitur ({selectedSpecs.features.length})
              </span>
              <ul className="grid grid-cols-1 gap-3.5">
                {selectedSpecs.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs leading-relaxed text-zinc-300 font-light">
                    <Check className="h-4.5 w-4.5 text-gold-light shrink-0 mr-2.5 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-zinc-900">
              <Button
                variant="outline"
                onClick={() => setSelectedSpecs(null)}
                className="text-xs py-2 px-4 rounded-sm"
              >
                Tutup Spec
              </Button>
              <Button
                onClick={() => {
                  handleSelectPackage(selectedSpecs.waMessage);
                  setSelectedSpecs(null);
                }}
                className="text-xs py-2 px-5 rounded-sm"
              >
                Pesan Sekarang
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
