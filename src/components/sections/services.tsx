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
      title: "Rekayasa Solusi Perangkat Lunak",
      valueProp: "Sistem digital modular skala besar yang dirancang khusus untuk memotong hambatan operasional, mendigitalisasi alur kerja rumit, serta menjamin sistem siap berkembang menghadapi pertumbuhan transaksi bisnis Anda.",
    },
    {
      icon: <Database className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Otomasi Proses & Alur Kerja",
      valueProp: "Mengeliminasi hingga sembilan puluh persen pekerjaan manual yang berulang melalui robot pemroses cerdas. Solusi ini menangani sinkronisasi data internal dan eksekusi tugas rutin secara terjadwal.",
    },
    {
      icon: <Cpu className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Pembuatan Aplikasi Web Kustom",
      valueProp: "Dasbor interaktif, sistem manajemen inventaris, dan portal kustom siap pakai berkecepatan tinggi yang ramah bagi pengguna serta memiliki proteksi keamanan ketat untuk data operasional perusahaan.",
    },
    {
      icon: <RotateCcw className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Redesign Website & Landing Page Premium",
      valueProp: "Transformasi visual total platform publik Anda dengan estetika kemewahan kelas dunia. Dirancang khusus untuk meningkatkan konversi kunjungan pengunjung menjadi prospek bisnis bernilai tinggi.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Pengembangan Aplikasi Seluler",
      valueProp: "Aplikasi seluler Android dan iOS berkinerja tinggi yang responsif untuk menunjang kebutuhan akses data operasional secara mobile kapan saja dan di mana saja, terintegrasi langsung ke sistem utama.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Ekstraksi Data & Otomasi Seluler",
      valueProp: "Pengumpulan berkala data pasar eksternal secara otomatis untuk memantau tren kompetitif secara real-time, serta otomasi pengoperasian sistem seluler untuk integrasi data lintas platform.",
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
            LAYANAN UTAMA & STRATEGI TEKNOLOGI
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug">
            Solusi Rekayasa Perangkat Lunak & Otomasi Tingkat Enterprise
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
