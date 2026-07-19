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
  originalPrice?: string;
  period: string;
  features: React.ReactNode[];
  waMessage: string;
  isPopular?: boolean;
  detailedSpecs: string;
}

export const Pricing: React.FC = () => {
  const [selectedSpecs, setSelectedSpecs] = useState<PricingPackage | null>(null);

  const packages: PricingPackage[] = [
    {
      name: "Proker KKM (Basic)",
      focus: "Cocok untuk: Profil Desa Singkat",
      price: "Rp 450.000",
      originalPrice: "Rp 750.000",
      period: "Terima Beres",
      features: [
        "Sistem siap dalam 1 Hari Kerja",
        <span key="domain" className="inline-flex items-center gap-1.5">
          Gratis Domain 1 Tahun 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Ekstensi domain gratis 1 tahun: .my.id
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        <span key="hosting" className="inline-flex items-center gap-1.5">
          Gratis Hosting Bebas Kendala 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Hosting premium Vercel/Netlify. Bebas down dan tidak ada biaya perpanjangan bulanan.
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Situs Profil Desa/Kelompok 1 Halaman",
        "Integrasi Navigasi Chat Otomatis",
        "Revisi Minor Tampilan 1x"
      ],
      waMessage:
        "Halo WEBSITELN, kelompok KKM saya berminat dengan Paket Proker KKM Basic (Rp 450rb). Boleh dijadwalkan sesi konsultasi?",
      detailedSpecs:
        "Solusi efisien untuk kelompok KKM yang memerlukan luaran program kerja digital yang nyata. Spesifikasi: Landing page 1 halaman (statis), mencakup profil desa, galeri kegiatan terbatas, dan navigasi kontak. Paket ini mengedepankan kecepatan serah terima. Tanpa biaya perpanjangan server tersembunyi.",
    },
    {
      name: "Proker KKM (Sistem Pro)",
      focus: "Cocok untuk: Digitalisasi Desa",
      price: "Rp 700.000",
      originalPrice: "Rp 1.200.000",
      period: "Terima Beres",
      isPopular: true,
      features: [
        "Desain Arsitektur Multi-Halaman",
        "Formulir Pendataan Warga Dinamis",
        "Panel Dasbor Kelola Data",
        <span key="role" className="inline-flex items-center gap-1.5">
          Multi Role Akses (2 Aktor) 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Login terpisah untuk Warga dan Kepala Desa/Admin
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Direktori UMKM & Potensi Desa",
        <span key="domhost" className="inline-flex items-center gap-1.5">
          Gratis Domain & Hosting Eksekutif 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Gratis Domain (.my.id) 1 tahun dan Hosting selamanya.
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Gratis Perbaikan Bug Selama Proker",
        "Revisi Struktur Minor 2x",
      ],
      waMessage:
        "Halo WEBSITELN, saya tertarik merancang web pendataan desa dengan Paket KKM Sistem Pro (Rp 700rb). Mohon info prosedurnya.",
      detailedSpecs:
        "Didesain khusus untuk program kerja unggulan (Digitalisasi Desa). Spesifikasi: Arsitektur multi-halaman interaktif, dilengkapi basis data dinamis untuk mendata warga atau UMKM lokal, serta formulir aduan terpusat. Output dijamin melampaui standar ekspektasi Dosen Pembimbing Lapangan.",
    },
    {
      name: "Sistem Aplikasi Skripsi",
      focus: "Cocok untuk: Tugas Akhir Mahasiswa",
      price: "Rp 2.000.000",
      originalPrice: "Rp 4.000.000",
      period: "Satu Siklus Revisi",
      features: [
        <span key="role" className="inline-flex items-center gap-1.5">
          Multi Role Akses (Maks. 2 Aktor) 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Contoh: Level Admin dan User Biasa.
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Operasi Basis Data Lengkap (CRUD)",
        <span key="api" className="inline-flex items-center gap-1.5">
          Integrasi API Eksternal Terukur 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Mulai dari 1 integrasi gratis (contoh: Maps, Whatsapp API). Penambahan seperti Payment Gateway disesuaikan.
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Dokumentasi Alur Kode Fungsional",
        "Penempatan Hosting Produksi",
        "Revisi Logika & Tampilan 3x",
        "Sesi Orientasi Kode Sebelum Sidang",
      ],
      waMessage:
        "Halo WEBSITELN, saya membutuhkan jasa rekayasa sistem untuk Tugas Akhir/Skripsi (Mulai Rp 2jt). Boleh kita jadwalkan sesi spesifikasi fitur?",
      detailedSpecs:
        "Paket rekayasa perangkat lunak untuk kebutuhan demonstrasi Tugas Akhir. Layanan ini murni berfokus pada pengembangan sistem fungsional siap uji (tanpa pengerjaan bab laporan/paper). Ruang lingkup dibatasi pada fitur inti (maksimal 2 peran pengguna) agar pengembangan sejalan dengan jadwal sidang Anda.",
    },
    {
      name: "Python Automation & AI",
      focus: "Cocok untuk: Efisiensi Bisnis",
      price: "Rp 1.500.000",
      originalPrice: "Rp 3.500.000",
      period: "Per Skrip Otomasi",
      features: [
        "Ekstraksi Data Otomatis (Web Scraping)",
        "Otomatisasi Input Basis Data",
        <span key="ai" className="inline-flex items-center gap-1.5">
          Integrasi Asisten AI (OpenAI/RAG) 
          <div className="relative group flex items-center cursor-help">
            <Info className="h-3.5 w-3.5 text-zinc-500 group-hover:text-gold-light transition-colors shrink-0" />
            <div className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px] p-2.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] leading-relaxed rounded-sm shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-[99] text-left">
              Penggunaan model NLP untuk analisis data atau asisten virtual.
              <div className="absolute -bottom-1 right-[2px] w-2.5 h-2.5 bg-zinc-900 border-b border-r border-zinc-700 rotate-45"></div>
            </div>
          </div>
        </span>,
        "Sistem Balasan Cepat Lintas Platform",
        "Manipulasi Data Lanjutan (Pandas)",
        "Pengujian Ketahanan Sistem",
        "Garansi Berjalan 1 Bulan",
      ],
      waMessage:
        "Halo WEBSITELN, perusahaan/bisnis saya membutuhkan efisiensi alur kerja dengan Paket Python Automation & AI. Boleh jadwalkan diskusi?",
      detailedSpecs:
        "Tinggalkan rutinitas manual yang repetitif. Kami merancang skrip Python tingkat lanjut untuk otomatisasi ekstraksi data antar platform, sinkronisasi operasional harian, hingga asisten pintar terintegrasi dengan kecerdasan buatan. Mengeliminasi kesalahan manusia dan mempercepat siklus kerja bisnis.",
    }
  ];

  const handleSelectPackage = (message: string) => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+62 817-7495-2006";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="bg-zinc-950 py-32 px-6 relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            PILIHAN PAKET LAYANAN
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug max-w-2xl">
            Solusi Digital yang Fleksibel Sesuai Kebutuhan Anda
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-lg mt-6 leading-relaxed">
            Dari proker mahasiswa hingga infrastruktur bisnis perusahaan. Harga transparan, sistem hak milik sepenuhnya, tanpa biaya langganan server tersembunyi.
          </p>
          <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
        </div>

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
                {pkg.isPopular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gold-dark text-zinc-50 text-[10px] tracking-widest uppercase font-semibold py-1.5 px-4 rounded-sm shadow-md">
                    REKOMENDASI
                  </div>
                )}

                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-3">
                    {pkg.focus}
                  </span>
                  <h3 className="text-xl font-light text-zinc-100 tracking-wide mb-6 min-h-[56px] flex items-center leading-snug">
                    {pkg.name}
                  </h3>

                  <div className="mb-8 border-b border-zinc-900/80 pb-6">
                    {pkg.originalPrice && (
                      <span className="text-sm font-medium text-zinc-600 line-through decoration-red-500/50 block mb-1">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl md:text-3xl font-light text-gold-light">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-500 block mt-1">
                      {pkg.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {displayedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs leading-relaxed text-zinc-400 font-light">
                        <Check className="h-4 w-4 text-gold-dark shrink-0 mr-2.5 mt-0.5" />
                        <div className="flex-1 w-full min-w-0">{feature}</div>
                      </li>
                    ))}
                  </ul>

                  {hasMoreFeatures && (
                    <button
                      onClick={() => setSelectedSpecs(pkg)}
                      className="text-xs text-gold-light hover:text-gold-dark font-semibold transition-colors duration-200 block mb-8 text-left cursor-pointer focus:outline-none"
                    >
                      + {extraCount} fungsionalitas lainnya...
                    </button>
                  )}
                </div>

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
                    <div className="flex-1 w-full min-w-0">{feature}</div>
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