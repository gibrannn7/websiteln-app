"use client";

import React from "react";
import { Laptop, Cpu, ShieldCheck, Database, Smartphone, RotateCcw } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  valueProp: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Laptop className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Infrastruktur Web KKM & Profil Desa",
      valueProp: "Desain sistem informasi desa dan pangkalan data UMKM interaktif. Dibangun khusus untuk memenuhi standar validasi luaran program kerja akademik dengan jaminan serah terima di bawah 24 jam.",
    },
    {
      icon: <Database className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Rekayasa Sistem Tugas Akhir",
      valueProp: "Konstruksi perangkat lunak kustom (CRUD kompleks, Multi-Role, API) yang stabil. Kami menyediakan dokumentasi kode yang bersih agar Anda menguasai alur sistem saat sidang pengujian berlangsung.",
    },
    {
      icon: <RotateCcw className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Otomasi Skrip & Pemrosesan Data",
      valueProp: "Eliminasi input manual berulang melalui arsitektur skrip Python. Kami mengotomatiskan ekstraksi data web (scraping), sinkronisasi basis data, hingga pelaporan matriks secara instan.",
    },
    {
      icon: <Cpu className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Integrasi Logika Kecerdasan Buatan",
      valueProp: "Implementasi model AI terapan dan sistem RAG (Retrieval-Augmented Generation) pada ekosistem web Anda untuk otomatisasi respons analitik dan dukungan operasional tanpa henti.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Modernisasi Antarmuka Pengguna",
      valueProp: "Restrukturisasi visual web lama (legacy) menjadi antarmuka korporat modern. Fokus pada optimalisasi Core Web Vitals, navigasi intuitif, dan peningkatan rasio konversi pengunjung.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Manajemen Server & Basis Data",
      valueProp: "Layanan penempatan aplikasi (deployment) tanpa hambatan dengan manajemen relasi basis data yang aman. Menjamin waktu aktif (uptime) server 99.9% tanpa membebani Anda dengan konfigurasi teknis.",
    },
  ];

  return (
    <section id="services" className="bg-zinc-950 py-32 px-6 relative z-10 overflow-hidden">
      {/* Top seamless transition gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-20 max-w-3xl">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            LAYANAN UTAMA
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug">
            Solusi IT Praktis untuk Mempermudah Bisnis Anda
          </h2>
          <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
        </div>

        {/* Services Grid - 3 Columns Desktop, 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 rounded-sm border border-zinc-900 bg-zinc-900/10 hover:border-gold-dark/30 hover:bg-zinc-900/25 transition-all duration-300 group"
            >
              <div>
                <div className="mb-6 inline-block p-3.5 rounded-sm bg-zinc-900/90 border border-zinc-850 group-hover:border-gold-light/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-normal text-zinc-100 tracking-wide mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                  {service.valueProp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};