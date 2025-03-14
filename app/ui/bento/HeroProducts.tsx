"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge"

const href = "/basecamas";
const title = "Base Camas";
const description = "Sencillas, modulares y sobremedidas. Garantía de 1 a 2 años";
const images = [
  { id: 1, url: "/images/basecamas/1.jpeg" },
  { id: 2, url: "/images/basecamas/2.jpeg" },
  { id: 3, url: "/images/basecamas/3.jpeg" },
  { id: 4, url: "/images/basecamas/4.jpeg" },
  { id: 5, url: "/images/basecamas/5.jpeg" },
];

export function HeroProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href={href}
      className={`relative block rounded-xl overflow-hidden h-full text-white`}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex].id}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          />
        </AnimatePresence>

        <div className="relative z-10 p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs md:text-sm opacity-80 mb-2">{description}</p>
          <Badge className="bg-emerald-600">Desde $90.000</Badge>
        </div>
      </div>
    </Link>
  );
}
