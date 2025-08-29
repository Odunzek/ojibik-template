"use client";

import React from "react";
import LetterPage2 from "../components/LetterPage2";
import Image from "next/image";

const Page37: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage2 backgroundColor="white">
        {/* Header with icon + breadcrumb */}
        <Image
          src="/icons/headline_icon_1.svg"
          alt="Executive Summary Icon"
          width={1}
          height={1}
          className="absolute left-[0.2842in] top-[0.338in]  w-[0.1815in] h-[0.199in]"
        />

        <Image
          src="/icons/header-vert-line.png"
          alt="logo"
          width={1}
          height={1}
          className="absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-[1]"
        />

          {/* Header text block */}
        <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
        <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846] mr-1">
          Production Solution »
        </span>
        <span className="font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-[#4b5846]">
            Rendering
        </span>
        </div>

        {/* Main Title – anchor to LetterPage */}
        <div className="absolute left-[0.75in] top-[0.675in] text-[#4b5846]">
          <span className="font-[Larken-Regular] text-[26.4pt] leading-[31.68pt] block mb-4">
            Room 408A
          </span>
        </div>

        {/* Logos Row */}
        <div className="absolute left-[0.75in] top-[1.35in] flex items-center gap-[0.5in]">
          {/* Logo placeholders (replace src paths with your actual logo files) */}
          <div className="w-[1in] h-[0.35in] relative">
            <Image
              src="/icons/spec.png"
              alt="Spec Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[1in] h-[0.35in] relative">
            <Image
              src="/icons/teknion.png"
              alt="Teknion Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[1in] h-[0.35in] relative">
            <Image
              src="/icons/groupelacasse.png"
              alt="Groupe Lacasse Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[1in] h-[0.35in] relative">
            <Image
              src="/icons/degaspe.png"
              alt="Gaspé Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[1in] h-[0.35in] relative">
            <Image
              src="/icons/sleepNation.png"
              alt="sleepnation Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>



        {/* image */}
      <div className="absolute left-[0in] top-[2.0589in] w-[17in] h-[7.8125in] overflow-hidden">
        <Image
          src="/images/page37/asset_p37_1_20250820_114336.png"
          alt="Room 408A"
          fill
          className="object-cover"
          sizes="1754px"    // match the box width (in CSS pixels)
          quality={95}
          priority
        />
      </div>

        {/* Footer */}
        <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
          <Image
            src="/icons/footer.svg"
            alt="Page Number"
            width={1} height={1}
            className="select-none w-[0.2848in] h-[0.2848in]"
          />
          <span>36 of 134</span>
        </div>
        {/* Footer */}
        <div className="absolute left-[15.95in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <span>37 of 134</span>            
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1}
              height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
          </div>
      </LetterPage2>
    </div>
  );
};

export default Page37;
