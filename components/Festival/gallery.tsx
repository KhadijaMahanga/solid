"use client"

import React, { useState } from "react";
import Image from "next/image";


export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "/images/media-festival-2024/pic1.jpeg",
    },
    {
      imgelink: "/images/media-festival-2024/pic2.jpeg",
    },
    {
      imgelink: "/images/media-festival-2024/pic3.jpeg",
        },
    {
      imgelink: "/images/media-festival-2024/pic4.jpeg",
    },
    {
      imgelink: "/images/media-festival-2024/pic5.jpeg",
    },
    {
      imgelink: "/images/media-festival-2024/pic6.jpeg",    
    },
    {
      imgelink: "/images/media-festival-2024/pic7.jpeg",    
    },
    {
      imgelink: "/images/media-festival-2024/pic8.jpeg",
    },
    {
      imgelink: "/images/media-festival-2024/pic9.jpeg",    
    },
    {
      imgelink: "/images/media-festival-2024/pic10.jpeg",    
    },
  ];
 
  const [active, setActive] = useState("/images/media-festival-2024/pic9.jpeg");
 
  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          width={560}
          height={450}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imgelink)}
              src={imgelink}
              width={100}
              height={20}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
