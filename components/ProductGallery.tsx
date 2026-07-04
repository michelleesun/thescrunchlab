"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl2 bg-blush-50 shadow-card ring-1 ring-clay-100">
        <Image
          src={images[active]}
          alt={`${name} product photo ${active + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 45vw, 90vw"
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <button
            key={src + index}
            onClick={() => setActive(index)}
            className={`relative aspect-square overflow-hidden rounded-xl ring-2 transition-all ${
              active === index ? "ring-blush-400" : "ring-transparent opacity-80 hover:opacity-100"
            }`}
            aria-label={`Show image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="140px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
