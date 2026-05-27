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

  const legalContent = {
    privacy: {
      title: "Kebijakan Privasi (Privacy Policy)",
      desc: "websiteln berkomitmen penuh untuk melindungi privasi data operasional klien kami. Seluruh informasi yang dikirimkan melalui formulir kontak atau data hasil eksekusi otomasi web scraping disimpan dalam enkripsi server yang ketat dan tidak akan pernah didistribusikan kepada pihak ketiga tanpa persetujuan tertulis secara legal.",
    },
    terms: {
      title: "Ketentuan Layanan (Terms of Service)",
      desc: "Layanan pengembangan perangkat lunak yang disediakan oleh websiteln beroperasi berdasarkan ruang lingkup kerja yang disepakati bersama dalam dokumen kontrak tertulis. Paket langganan pemeliharaan Elite Care dapat dibatalkan kapan saja dengan pemberitahuan minimal 14 hari sebelum siklus penagihan bulan berikutnya berjalan.",
    },
  };

  return (
    <footer className="bg-zinc-950 pt-16 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-zinc-900/60">
          {/* Column 1 - Brand Info with Next.js Image */}
          <div className="flex flex-col space-y-5">
            <Image
              src="/logo.png"
              alt="websiteln logo"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              websiteln adalah penyedia layanan rekayasa perangkat lunak elit dan otomasi proses bisnis cerdas. Kami berdedikasi membantu perusahaan skala enterprise memperbarui infrastruktur IT serta mengintegrasikan kecerdasan buatan demi efisiensi operasional.
            </p>
          </div>

          {/* Column 2 - Navigation Links */}
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
                  Matriks Investasi
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
          </div>

          {/* Column 3 - Corporate Contacts */}
          <div className="flex flex-col space-y-4">
            <span className="text-xs text-zinc-350 font-semibold uppercase tracking-widest">
              Hubungi Kami
            </span>
            <ul className="space-y-3.5">
              <li className="flex items-start text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                <Mail className="h-4.5 w-4.5 text-gold-light shrink-0 mr-3 mt-0.5" />
                <span>hello@websiteln.com</span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                <MapPin className="h-4.5 w-4.5 text-gold-light shrink-0 mr-3 mt-0.5" />
                <span>Kota Serang, Banten, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal copy & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-zinc-500 font-light">
            Copyright &copy; 2026 websiteln. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => setLegalTab("privacy")}
              className="text-[11px] text-zinc-500 hover:text-gold-light transition-colors font-light cursor-pointer"
            >
              Kebijakan Privasi
            </button>
            <button
              onClick={() => setLegalTab("terms")}
              className="text-[11px] text-zinc-500 hover:text-gold-light transition-colors font-light cursor-pointer"
            >
              Ketentuan Layanan
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for Legal Information */}
      <Dialog open={legalTab !== null} onOpenChange={(open) => !open && setLegalTab(null)}>
        {legalTab && (
          <DialogContent className="max-w-[90vw] sm:max-w-[500px] bg-zinc-950 border border-zinc-850 p-6 rounded-sm">
            <DialogHeader>
              <DialogTitle className="text-xl font-light text-zinc-100 tracking-tight">
                {legalContent[legalTab].title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-zinc-400 text-sm leading-relaxed font-light mt-4">
              {legalContent[legalTab].desc}
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </footer>
  );
};
