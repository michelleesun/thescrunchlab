"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Scrunchies made from rescued fabric, stacked on a wrist"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-clay-900/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-clay-900/50 via-transparent to-clay-900/10" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <span className="inline-flex items-center rounded-full bg-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
          Rescued fabric, remade with love
        </span>
        <h1 className="mt-6 text-balance font-serif text-6xl leading-[1.05] text-cream sm:text-7xl md:text-8xl">
          The ScrunchLab
        </h1>
        <p className="mt-6 max-w-lg text-balance font-serif text-xl italic leading-relaxed text-cream/90 sm:text-2xl">
          &ldquo;Let&rsquo;s stitch the change together; it starts with yours.&rdquo;
        </p>
        <div className="mt-10">
          <Button href="/shop" variant="primary" className="text-base">
            Shop the Collection
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/80"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="16" height="24" rx="8" stroke="currentColor" strokeOpacity="0.7" />
            <circle cx="9" cy="8" r="2" fill="currentColor" />
          </svg>
        </motion.span>
      </motion.div>
    </div>
  );
}
