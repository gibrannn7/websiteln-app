"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import LightRays from "@/components/LightRays";

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleWhatsAppConsultation = () => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+62 817-7495-2006";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const message = "Halo websiteln, saya ingin mengadakan konsultasi gratis mengenai proyek digital bisnis saya.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-zinc-950 py-28 px-6">
      {/* Subtle radial grid pattern with dim dark gold dots */}
      <div 
        className="absolute inset-0 z-[1] opacity-25 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(rgba(164, 127, 42, 0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* LightRays WebGL background with new gold color */}
      <div className="absolute inset-0 z-[2] opacity-35 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ead98d" // Gold Light
          raysSpeed={0.6}
          lightSpread={1.3}
          rayLength={2.6}
          pulsating={true}
          fadeDistance={1.3}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.06}
          noiseAmount={0.04}
          distortion={0.12}
        />
      </div>

      {/* Luxury glow overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-zinc-950/10 via-zinc-950/50 to-zinc-950" />

      {/* Bottom seamless transition gradient mask */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-[4] backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="relative z-[10] max-w-5xl mx-auto flex flex-col items-center text-center mt-8">
        {/* Small Sub-tag */}
        <span className="text-xs text-gold-light tracking-[0.3em] uppercase font-semibold mb-6 block animate-fade-in">
          PREMIUM DIGITAL HOUSE & AUTOMATION ARCHITECT
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-light text-zinc-100 tracking-tight leading-[1.15] max-w-4xl animate-slide-up">
          Transformasi Digital Tanpa Batas. Elevasi Bisnis Anda dengan Arsitektur Kode Kelas Dunia.
        </h1>

        {/* Sub-heading */}
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mt-8 animate-slide-up delay-200">
          Kami membangun aplikasi instan berbasis teknologi modern, modernisasi sistem legacy, dan merancang otomatisasi berbasis kecerdasan buatan. Hubungi tim kami sekarang untuk menjadwalkan konsultasi awal tanpa biaya operasional.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full sm:w-auto animate-slide-up delay-300">
          <Button
            onClick={handleWhatsAppConsultation}
            variant="default"
            className="w-full sm:w-auto py-3 px-8 rounded-sm text-sm font-semibold tracking-wider uppercase"
          >
            Konsultasi Gratis
          </Button>
          <Button
            onClick={() => handleScrollTo("#portfolio")}
            variant="outline"
            className="w-full sm:w-auto py-3 px-8 rounded-sm text-sm font-semibold tracking-wider uppercase"
          >
            Katalog Portofolio
          </Button>
        </div>
      </div>
    </section>
  );
};
