"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images?: string | { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // ✅ Parse string if passed, fallback to array or empty
  const parsedImages = typeof images === "string" 
    ? JSON.parse(images) 
    : (images ?? []);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!parsedImages || parsedImages.length === 0) {
    return (
      <div className="my-8 p-6 text-center bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-dashed border-yellow-300">
        <p className="text-yellow-700 dark:text-yellow-300">⚠️ No images found. Check the gallery syntax.</p>
      </div>
    );
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % parsedImages.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + parsedImages.length) % parsedImages.length);

  return (
    <div className="relative my-8 rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={parsedImages[currentIndex]?.src || ""}
          alt={parsedImages[currentIndex]?.alt || "Gallery image"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {parsedImages.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition">←</button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition">→</button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {parsedImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${idx === currentIndex ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}