"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { legalData } from "@/data/legal-data";

export const Footer: React.FC = () => {
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | null>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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

  return (
    <footer className="bg-zinc-950 pt-16 pb-10 px-6 relative z-10 overflow-hidden">
      
      {/* Efek Dot Statis Memudar ke Bawah (Premium UX) */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-80" 
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.9) 2px, transparent 2px)",
          backgroundSize: "24px 24px",
          /* Logika Masking: Solid di atas, memudar di tengah, hilang sempurna di bawah */
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)"
        }}
      />
      {/* Gradient atas buat transisi mulus dengan section sebelumnya */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-zinc-950 via-transparent to-transparent h-20" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-zinc-900/60">
          {/* Column 1 - Brand Info with Next.js Image */}
          <div className="flex flex-col space-y-5">
            <Image
              src="/logo.png"
              alt="websiteln logo"
              width={260}
              height={72}
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              <strong className="font-medium text-zinc-200">WEBSITELN</strong> hadir sebagai mitra terpercaya untuk membereskan segala kebutuhan IT dan digitalisasi bisnis Anda. Dari bikin website kustom, rapiin database, sampai bikin sistem otomatis berbasis AI, kami siap bantu ubah cara kerja manual Anda jadi serba praktis dan otomatis. Yuk, konsultasikan ide proyek Anda sekarang dan buat operasional bisnis berjalan lancar 24/7!
            </p>
          </div>

          {/* Column 2 - Navigation Links & Legal */}
          <div className="flex flex-col space-y-4 md:pl-12">
            <span className="text-xs text-zinc-350 font-semibold uppercase tracking-widest">
              Navigasi Cepat
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleScrollTo(e, "#portfolio")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light"
                >
                  Katalog Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollTo(e, "#pricing")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, "#faq")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light"
                >
                  Tanya Jawab
                </a>
              </li>
            </ul>

            {/* Tambahan Legalitas di bawah Navigasi Cepat */}
            <span className="text-xs text-zinc-350 font-semibold uppercase tracking-widest mt-6">
              Legalitas
            </span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setLegalTab("privacy")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light cursor-pointer text-left"
                >
                  Kebijakan Privasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalTab("terms")}
                  className="text-xs md:text-sm text-zinc-400 hover:text-gold-light transition-colors font-light cursor-pointer text-left"
                >
                  Ketentuan Layanan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Corporate Contacts */}
          <div className="flex flex-col space-y-4">
            <span className="text-xs text-zinc-350 font-semibold uppercase tracking-widest">
              Hubungi Kami
            </span>
            <ul className="space-y-3.5 mb-4">
              <li className="flex items-start text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                <Mail className="h-4.5 w-4.5 text-gold-light shrink-0 mr-3 mt-0.5" />
                <span>admin@websiteln.com</span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                <MapPin className="h-4.5 w-4.5 text-gold-light shrink-0 mr-3 mt-0.5" />
                <span>Kota Serang, Banten, Indonesia</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <span className="text-xs text-zinc-350 font-semibold uppercase tracking-widest mt-6">
              Media Sosial
            </span>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.instagram.com/websiteln.id/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-sm bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:bg-gold-dark/10 hover:border-gold-dark/40 transition-all duration-300 group"
                aria-label="Instagram websiteln"
              >
                <Image src="/logo/svg/sosmed/ig.svg" alt="Instagram" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.tiktok.com/@websiteln.id" 
                target="_blank" 
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-sm bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:bg-gold-dark/10 hover:border-gold-dark/40 transition-all duration-300 group"
                aria-label="TikTok websiteln"
              >
                <Image src="/logo/svg/sosmed/tiktok.svg" alt="TikTok" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.youtube.com/@websiteln" 
                target="_blank" 
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-sm bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:bg-gold-dark/10 hover:border-gold-dark/40 transition-all duration-300 group"
                aria-label="YouTube websiteln"
              >
                <Image src="/logo/svg/sosmed/yt.svg" alt="YouTube" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal copy & Copyright */}
        {/* Tambahkan md:pr-20 untuk memberi ruang aman bagi WA Bubble di sisi kanan */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 md:pr-20">
          <div className="text-[11px] text-zinc-500 font-light text-center md:text-left">
            Copyright &copy; 2026 websiteln. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>
      </div>

      {/* Dialog for Legal Information */}
      <Dialog open={legalTab !== null} onOpenChange={(open) => !open && setLegalTab(null)}>
        {legalTab && (
          <DialogContent className="max-w-[90vw] sm:max-w-[650px] bg-zinc-950 border border-zinc-850 p-6 md:p-8 rounded-sm overflow-y-auto max-h-[85vh]">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-xl md:text-2xl font-light text-zinc-100 tracking-tight">
                {legalData[legalTab].title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription asChild>
              <div className="text-zinc-400 text-sm leading-relaxed font-light">
                {/* Memecah string (\n\n) dari JSON menjadi elemen paragraf <p> agar rapi */}
                {legalData[legalTab].desc.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </footer>
  );
};