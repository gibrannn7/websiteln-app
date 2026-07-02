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
      title: "Sistem Web & Aplikasi Kustom",
      valueProp: "Kami membangun website dan aplikasi yang benar-benar pas dengan alur bisnis Anda. Bukan pakai template pasaran, tapi sistem yang dibangun khusus untuk memudahkan operasional Anda sehari-hari.",
    },
    {
      icon: <Database className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Otomatisasi Alur Kerja (Workflow)",
      valueProp: "Capek dengan input data manual atau kirim pesan satu per satu? Kami buatkan sistem yang berjalan otomatis, mulai dari sinkronisasi database sampai notifikasi pesan secara instan agar tim Anda lebih produktif.",
    },
    {
      icon: <Cpu className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Solusi Cerdas Berbasis AI",
      valueProp: "Jangan biarkan teknologi jadi penghambat. Kami integrasikan AI yang siap membantu menjawab pertanyaan pelanggan atau mengolah data bisnis Anda secara cerdas, akurat, dan otomatis.",
    },
    {
      icon: <RotateCcw className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Redesign Website & Landing Page",
      valueProp: "Bikin tampilan website Anda lebih profesional dan enak dilihat. Kami bantu ubah tampilan lama Anda menjadi lebih modern dan fokus agar pengunjung lebih tertarik untuk jadi pelanggan.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Pengembangan Aplikasi Mobile",
      valueProp: "Butuh aplikasi Android atau iOS yang ringan dan gampang dipakai? Kami buatkan aplikasi yang terhubung langsung ke sistem pusat, supaya Anda bisa memantau bisnis kapan saja dari ponsel.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-gold-light stroke-[1.25]" />,
      title: "Integrasi & Kelola Data",
      valueProp: "Kami bantu bereskan urusan data bisnis Anda—mulai dari integrasi antar sistem hingga pengamanan data—supaya operasional bisnis Anda tetap lancar dan aman tanpa perlu takut data berantakan.",
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