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
    const message = "Halo WEBSITELN, saya ingin mengadakan konsultasi gratis mengenai kebutuhan sistem digital bisnis saya.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] py-28 px-6">
      
      {/* 1. Efek Background (LineWaves & Grid) */}
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
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-b from-black/20 via-black/50 to-[#0A0A0A]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none z-[4] backdrop-blur-[1px]" />

      {/* 3. Main Content */}
      <div className="container mx-auto px-6 relative z-[10] text-center max-w-5xl">
        
        {/* Tagline Atas */}
        <p className="text-[#DAA520] font-medium tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 animate-fade-in">
          MITRA TEKNOLOGI & DIGITALISASI BISNIS
        </p>

        {/* Headline Utama */}
        <h1 className="text-4xl md:text-6xl font-light text-zinc-100 tracking-tight leading-[1.2] mb-8 animate-slide-up">
          Bangun Website & Sistem Otomatisasi Cerdas untuk Maksimalkan Bisnis Anda.
        </h1>

        {/* Sub-headline */}
        <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-slide-up delay-200">
          Tinggalkan proses manual yang membuang waktu. Dari pembuatan <strong className="text-zinc-200 font-medium">Sistem Web & Aplikasi Custom</strong>, integrasi <strong className="text-zinc-200 font-medium">Workflow Automation</strong>, hingga pengembangan <strong className="text-zinc-200 font-medium">AI Chatbot</strong> kami merancang solusi teknologi yang membuat operasional bisnis Anda berjalan otomatis 24/7.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <button
            onClick={handleWhatsAppConsultation}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto bg-[#DAA520] hover:bg-[#B8860B] text-black font-semibold px-8 py-6 rounded-sm text-sm tracking-wide transition-all"
            )}
          >
            Konsultasi Gratis
          </button>
          <Link
            href="#portfolio"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white px-8 py-6 rounded-sm text-sm tracking-wide transition-all"
            )}
          >
            Katalog Portofolio
          </Link>
        </div>
      </div>
    </section>
  );
};