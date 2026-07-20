"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LineWaves from "@/components/LineWaves";

export const Hero = () => {
  const handleWhatsAppConsultation = () => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+6281774952006";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const message = "Halo WEBSITELN, saya membutuhkan bantuan cepat untuk rekayasa sistem/website. Boleh dijadwalkan sesi konsultasi?";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden bg-zinc-950 py-28 px-6">
      
      {/* 1. Efek Background (Dipertahankan sesuai aslinya) */}
      <div 
        className="absolute inset-0 z-[1] opacity-25 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(rgba(218, 165, 32, 0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 z-[2] opacity-70 pointer-events-none">
        <LineWaves
          speed={0.09}
          innerLineCount={8}
          outerLineCount={14}
          warpIntensity={0.3}
          rotation={-40}
          edgeFadeWidth={0.5}
          colorCycleSpeed={1.2}
          brightness={0.13}
          color1="#ead98d"
          color2="#a47f2a"
          color3="#DAA520"
          enableMouseInteraction
          mouseInfluence={1.4}
        />
      </div>

      {/* 2. Luxury Glow Overlay & Bottom Mask */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-[4] backdrop-blur-[1px]" />

      {/* 3. Main Content (Diubah menjadi Rata Kiri) */}
      <div className="container mx-auto px-6 relative z-[10] text-left max-w-7xl">
        <div className="max-w-3xl">

          {/* Headline Utama */}
          <h1 className="text-4xl md:text-6xl font-light text-zinc-100 tracking-tight leading-[1.1] mb-8 animate-slide-up">
            Eksekusi Presisi untuk Kebutuhan Infrastruktur Digital Anda.
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-12 animate-slide-up delay-200">
            Terdesak tenggat waktu luaran <strong className="text-zinc-200 font-medium">Program Kerja KKM</strong> atau membutuhkan penyelesaian <strong className="text-zinc-200 font-medium">Sistem Tugas Akhir</strong>? Kami merancang perangkat lunak berkinerja tinggi dan otomatisasi cerdas dengan serah terima ekstra cepat. Kualitas arsitektur enterprise, skalabilitas penuh, dengan efisiensi anggaran yang masuk akal.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center animate-slide-up delay-300">
            <button
              onClick={handleWhatsAppConsultation}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full sm:w-auto bg-gold-dark hover:bg-gold-light text-zinc-50 hover:text-zinc-950 font-semibold px-8 py-6 rounded-sm text-sm tracking-wide transition-all duration-300"
              )}
            >
              Konsultasikan Kebutuhan
            </button>
            <Link
              href="#portfolio"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-auto border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 px-8 py-6 rounded-sm text-sm tracking-wide transition-all duration-300"
              )}
            >
              Inspeksi Portofolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};