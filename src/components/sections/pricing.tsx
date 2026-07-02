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
      name: "Pendampingan & Maintenance",
      focus: "Dukungan IT Bulanan",
      price: "Rp 750.000",
      period: "Per Bulan",
      features: [
        "Pemeliharaan server & hosting",
        "Pembaruan keamanan & pencegahan virus",
        "Pencadangan (backup) data rutin",
        "Perbaikan bug & error dengan cepat",
        "Bantuan update konten berkala",
        "Laporan performa sistem bulanan",
        "Konsultasi teknis prioritas via WhatsApp",
      ],
      waMessage:
        "Halo WEBSITELN, saya tertarik berlangganan Paket Pendampingan & Maintenance untuk merawat sistem saya.",
      detailedSpecs:
        "Anda yang pegang bisnisnya, biar kami yang jaga teknisnya. Paket ini memastikan website atau sistem Anda tetap aman, rutin dicadangkan (backup), bebas error, dan siap diperbarui kapan saja. Anda menghemat banyak biaya karena tidak perlu menggaji tim IT internal khusus bulanan.",
    },
    {
      name: "Solusi Ringan (Web Profil)",
      focus: "Situs Profil & Landing Page",
      price: "Rp 1.500.000",
      period: "Mulai Dari / Satu Kali",
      features: [
        "Tampilan modern & elegan",
        "Responsif di HP & Desktop",
        "Integrasi tombol chat WhatsApp",
        "Optimasi pencarian Google (SEO Dasar)",
        "Gratis domain & hosting tahun pertama",
        "Revisi minor tampilan 2 kali",
        "Panduan cara edit konten mandiri",
      ],
      waMessage:
        "Halo WEBSITELN, saya tertarik dengan Paket Solusi Ringan untuk membuat website bisnis saya.",
      detailedSpecs:
        "Untuk Anda yang baru memulai dan ingin bisnisnya punya kredibilitas tinggi di internet. Fokus pada tampilan yang elegan, cepat dibuka, dan langsung terhubung ke kontak bisnis Anda tanpa proses yang rumit. Cocok untuk UMKM, profil perusahaan, atau katalog produk online.",
    },
    {
      name: "Otomasi & Sistem Operasional",
      focus: "Sistem Internal & Workflow",
      price: "Rp 4.500.000",
      period: "Mulai Dari / Satu Kali",
      features: [
        "Dashboard admin yang interaktif",
        "Pembuatan database kustom yang aman",
        "Otomatisasi alur kerja (Workflow)",
        "Integrasi notifikasi pesan otomatis",
        "Manajemen hak akses pengguna/staf",
        "Laporan & ekspor data (Excel/CSV)",
        "Sesi pelatihan penggunaan sistem",
      ],
      waMessage:
        "Halo WEBSITELN, saya ingin berkonsultasi mengenai Paket Otomasi & Sistem Operasional untuk efisiensi bisnis saya.",
      detailedSpecs:
        "Sistem kustom yang dirancang khusus untuk memotong jalur kerja manual yang bikin lelah. Sudah termasuk pembuatan dashboard admin, pengolahan database aman, hingga otomatisasi alur data sesuai kebutuhan tim Anda. Sangat cocok untuk sistem kasir, manajemen stok, absensi, atau bot layanan pelanggan.",
    },
    {
      name: "Platform Skala Besar",
      focus: "Aplikasi Mobile & Enterprise",
      price: "Rp 12.000.000",
      period: "Mulai Dari / Satu Kali",
      isPopular: true,
      features: [
        "Pembuatan Aplikasi Android / iOS",
        "Arsitektur server untuk traffic besar",
        "Integrasi Kecerdasan Buatan (AI)",
        "Modernisasi / perbaikan sistem lama",
        "Keamanan data tingkat lanjut",
        "Pengujian kualitas & sistem (QA Testing)",
        "Bantuan rilis ke PlayStore / AppStore",
      ],
      waMessage:
        "Halo WEBSITELN, saya butuh solusi untuk proyek skala besar dengan Paket Platform Skala Besar.",
      detailedSpecs:
        "Solusi menyeluruh untuk kebutuhan teknologi yang kompleks. Kami bangun arsitektur sistem dari nol—baik aplikasi seluler maupun platform berbasis kecerdasan buatan—yang siap menampung traffic besar dan data yang rumit. Dikerjakan oleh tim ahli untuk menjamin performa dan keamanan jangka panjang.",
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
      {/* Top seamless transition gradient mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            PILIHAN PAKET LAYANAN
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug max-w-2xl">
            Rencana Investasi Teknologi yang Fleksibel untuk Bisnis Anda
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-lg mt-6 leading-relaxed">
            Pilih skala pengembangan yang paling sesuai dengan kebutuhan operasional saat ini. Semua proyek dikerjakan secara transparan tanpa biaya tersembunyi.
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