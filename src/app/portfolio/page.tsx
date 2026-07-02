"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Image as ImageIcon, Maximize2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { portfolioData, PortfolioItem } from "@/data/portfolio-items";

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<"gallery" | "video">("gallery");
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
    setSliderIndex(0);
    setActiveMediaTab(item.externalVideoUrl ? "video" : "gallery");
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const handlePrevSlide = (galleryLen: number) => {
    setSliderIndex((prev) => (prev === 0 ? galleryLen - 1 : prev - 1));
  };

  const handleNextSlide = (galleryLen: number) => {
    setSliderIndex((prev) => (prev === galleryLen - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-zinc-950 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
              KATALOG LENGKAP
            </span>
            <h1 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug max-w-3xl">
              Portofolio Rekayasa Perangkat Lunak & Sistem Otomasi
            </h1>
            <p className="text-sm text-zinc-400 font-light max-w-lg mt-6 leading-relaxed">
              Koleksi lengkap proyek digital tingkat enterprise, pipeline otomasi data, serta asisten kecerdasan buatan terintegrasi.
            </p>
            <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
          </div>

          {/* 3-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {portfolioData.map((item) => (
              <div
                key={item.id}
                onClick={() => openDetails(item)}
                className="group cursor-pointer border border-zinc-900 bg-zinc-900/10 hover:border-gold-dark/40 hover:bg-zinc-900/20 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-900 text-gold-light border border-zinc-800 text-[10px] py-0.5 px-2.5 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-normal text-zinc-100 group-hover:text-gold-light transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed mt-4 line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home link */}
          <div className="flex justify-center mt-16">
            <Link 
              href="/" 
              className="text-xs font-semibold text-gold-light hover:text-gold-dark tracking-wider uppercase transition-colors"
            >
              &larr; Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppBubble />

      {/* Modal Dialog Detail - Luxury Asymmetric max-w-5xl */}
      <Dialog open={selectedItem !== null} onOpenChange={(open) => !open && closeDetails()}>
        {selectedItem && (
          <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-5xl bg-zinc-950 border border-zinc-850 p-8 rounded-sm shadow-2xl overflow-y-auto max-h-[92vh]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-4">
                <div>
                  <DialogHeader className="mb-6">
                    <span className="text-[10px] text-gold-light tracking-[0.2em] uppercase font-bold">
                      STUDI KASUS ENTERPRISE
                    </span>
                    <DialogTitle className="text-3xl font-light text-zinc-100 tracking-tight leading-tight mt-1.5">
                      {selectedItem.title}
                    </DialogTitle>
                  </DialogHeader>

                  <DialogDescription className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
                    {selectedItem.detailedDescription}
                  </DialogDescription>

                  <div className="mb-6">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mb-4 font-semibold">
                      Spesifikasi Tumpukan Teknologi
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedItem.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-900/80 text-gold-light border border-zinc-800 text-xs py-1 px-3.5 rounded-sm font-light shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-900 pt-6 mt-8 flex flex-wrap gap-4 items-center justify-between">
                  <span className="text-[11px] text-zinc-650 tracking-wider uppercase">
                    ID Referensi: {selectedItem.id}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => {
                      closeDetails();
                      const target = document.querySelector("#contact");
                      if (target) {
                        const offset = 80;
                        const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: pos, behavior: "smooth" });
                      }
                    }}
                    className="text-xs font-semibold text-gold-light hover:text-gold-dark tracking-wider uppercase transition-colors"
                  >
                    Konsultasikan Kebutuhan Sistem &rarr;
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {selectedItem.externalVideoUrl && (
                  <div className="flex bg-zinc-900 border border-zinc-850 p-1 rounded-sm mb-4">
                    <button
                      onClick={() => setActiveMediaTab("video")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs rounded-sm transition-all duration-200 cursor-pointer ${
                        activeMediaTab === "video"
                          ? "bg-gold-dark text-zinc-50 font-medium"
                          : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      <Play className="h-3.5 w-3.5" />
                      Video Demo
                    </button>
                    <button
                      onClick={() => setActiveMediaTab("gallery")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs rounded-sm transition-all duration-200 cursor-pointer ${
                        activeMediaTab === "gallery"
                          ? "bg-gold-dark text-zinc-50 font-medium"
                          : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      <ImageIcon className="h-3.5 w-3.5" />
                      Galeri Foto
                    </button>
                  </div>
                )}

                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 shadow-2xl shadow-gold-dark/5 group/media">
                  {activeMediaTab === "video" && selectedItem.externalVideoUrl ? (
                    <iframe
                      src={selectedItem.externalVideoUrl}
                      title={`Video showcase for ${selectedItem.title}`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <Image
                        src={selectedItem.mediaGallery[sliderIndex]}
                        alt={`${selectedItem.title} Gallery ${sliderIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover cursor-zoom-in"
                        onClick={() => setLightboxImage(selectedItem.mediaGallery[sliderIndex])}
                        loading="lazy"
                      />
                       {/* Zoom Indicator Icon overlay */}
                       <div 
                         onClick={() => setLightboxImage(selectedItem.mediaGallery[sliderIndex])}
                         className="absolute inset-0 bg-black/50 opacity-0 group-hover/media:opacity-100 flex flex-col items-center justify-center text-zinc-150 transition-opacity duration-300 cursor-zoom-in"
                         title="Perbesar Gambar"
                       >
                         <Maximize2 className="h-7 w-7 text-gold-light mb-2" />
                         <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-300">Lihat Layar Penuh</span>
                       </div>

                      {selectedItem.mediaGallery.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrevSlide(selectedItem.mediaGallery.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-zinc-200 hover:text-zinc-50 w-8 h-8 flex items-center justify-center rounded-full border border-zinc-800 transition-colors cursor-pointer"
                            aria-label="Previous image"
                          >
                            &larr;
                          </button>
                          <button
                            onClick={() => handleNextSlide(selectedItem.mediaGallery.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-zinc-200 hover:text-zinc-50 w-8 h-8 flex items-center justify-center rounded-full border border-zinc-800 transition-colors cursor-pointer"
                            aria-label="Next image"
                          >
                            &rarr;
                          </button>
                          <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded-sm text-[9px] text-zinc-400 tracking-widest uppercase">
                            {sliderIndex + 1} / {selectedItem.mediaGallery.length}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Full-Screen Lightbox Image Preview overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center cursor-zoom-out p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
            <Image
              src={lightboxImage}
              alt="Fullscreen preview"
              fill
              sizes="90vw"
              className="object-contain select-none"
              priority
            />
          </div>
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 bg-zinc-900 border border-zinc-850 text-gold-light hover:text-zinc-50 text-xs py-2.5 px-5 rounded-sm font-semibold tracking-wider uppercase transition-colors focus:outline-none cursor-pointer"
          >
            Tutup Preview
          </button>
        </div>
      )}
    </>
  );
}
