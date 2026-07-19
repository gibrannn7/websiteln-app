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
      name: "Paket KKM (Basic)",
      focus: "Web Desa / Kelompok Standar",
      price: "Rp 450.000",
      period: "Terima Beres",
      features: [
        "Gratis Domain 1 Tahun",
        "Gratis Hosting Selamanya (Anti Down)",
        "Desain Web Profil Desa/Kelompok 1 Halaman",
        "Galeri Foto & Artikel Program Kerja",
        "Responsif di HP & Laptop",
        "Tombol Chat WhatsApp Langsung",
        "Aset Template Proposal untuk Dosen/Desa",
      ],
      waMessage:
        "Halo WEBSITELN, kelompok KKM saya butuh web proker dengan Paket KKM Basic (Rp 450rb). Boleh diskusi?",
      detailedSpecs:
        "Paket super hemat khusus mahasiswa KKM/KKN. Dengan iuran kelompok yang sangat ringan, kalian sudah punya Program Kerja Unggulan berupa Website Desa/Kelompok. Biaya ini SUDAH TERMASUK Domain dan Hosting, jadi kalian benar-benar terima beres tanpa biaya bulanan tambahan. Cocok untuk proker dokumentasi dan profil wilayah.",
    },
    {
      name: "Paket KKM (Sistem Pro)",
      focus: "Proker Digitalisasi & Pendataan",
      price: "Rp 650.000",
      period: "Terima Beres",
      isPopular: true,
      features: [
        "Semua fitur di Paket Basic",
        "Sistem Pendataan Warga / UMKM Desa",
        "Dashboard Admin Sederhana (Kelola Data)",
        "Form Pengaduan / Aspirasi Warga",
        "Desain Multi-halaman (Lebih Profesional)",
        "Panduan presentasi sistem ke Kepala Desa",
        "Garansi perbaikan bug selama proker jalan",
      ],
      waMessage:
        "Halo WEBSITELN, saya tertarik dengan Paket KKM Sistem Pro (Rp 650rb) yang ada fitur pendataannya. Boleh info detail?",
      detailedSpecs:
        "Bikin DPL (Dosen Pembimbing Lapangan) dan Kepala Desa kagum! Paket ini bukan sekadar web profil biasa, tapi dilengkapi sistem pendataan dinamis (misal: sensus warga, direktori UMKM desa, atau form surat pengantar). Sangat direkomendasikan untuk kelompok yang mengusung tema 'Digitalisasi Desa'.",
    },
    {
      name: "IT Fix & Tugas Kuliah",
      focus: "Perbaikan Bug & Bantuan Ngoding",
      price: "Rp 250.000",
      period: "Per Request",
      features: [
        "Perbaikan Error / Bug kode (PHP, JS, Python)",
        "Konsultasi arsitektur sistem / skripsi",
        "Bantuan pembuatan fitur spesifik (Mikro)",
        "Optimasi database & query",
        "Pengerjaan cepat (Bisa hitungan jam/hari)",
        "Penjelasan alur kode (Biar bisa presentasi)",
      ],
      waMessage:
        "Halo WEBSITELN, saya butuh bantuan perbaikan kode/fitur (Paket IT Fix). Bisa bantu cek sistem saya?",
      detailedSpecs:
        "Stuck ngerjain tugas kuliah, project dosen, atau skripsi yang error terus? Kami bantu perbaiki bug sistem Anda atau buatkan fitur spesifik yang Anda butuhkan dengan cepat. Kami juga akan jelaskan alur kodenya agar Anda paham saat ditanya oleh dosen.",
    },
    {
      name: "Corporate & UMKM",
      focus: "Situs Bisnis Profesional",
      price: "Rp 950.000",
      period: "Satu Kali",
      features: [
        "Desain Premium & Animasi Eksklusif",
        "Gratis Domain (.com / .co.id) 1 Tahun",
        "Optimasi SEO (Tampil di Halaman Google)",
        "Integrasi Email Bisnis (nama@perusahaan.com)",
        "Dashboard CMS Manajemen Konten",
        "Keamanan SSL & Anti-DDoS",
        "Dukungan Teknis Prioritas 1 Bulan",
      ],
      waMessage:
        "Halo WEBSITELN, saya butuh website perusahaan/bisnis profesional dengan Paket Corporate. Boleh konsultasi?",
      detailedSpecs:
        "Solusi digital end-to-end untuk UMKM besar, CV, atau PT yang ingin tampil sangat profesional. Menggunakan teknologi modern (Next.js/React) yang super cepat, bukan WordPress template biasa. Dilengkapi email bisnis profesional dan optimasi mesin pencari (SEO) untuk menjangkau klien baru.",
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
                        <span>{feature}</span>
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