"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page38: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in] ">
            {/* Icon + header */}
            <Image
              src="/images/page38/asset_p38_1_20250820_114417.png"
              alt="Production Summary"
              width={1}
              height={1}
              className="absolute left-[0.2842in] top-[0.338in] w-[0.1815in] h-[0.199in] z-[1]"
            />
            <Image
              src="/icons/header-vert-line.png"
              alt="vertical line"
              width={1}
              height={1}
              className="absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-[1]"
            />
            <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap z-[1]">
              <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#ffffff]">
                Production Solution »
              </span>
              <span className="ml-1 font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-[#ffffff]">
                Lookbook
              </span>
            </div>

             {/* Main Title */}
            <div className="absolute left-[0.75in] top-[1.0834in] text-[#ffffff] z-[1]">
              <span className="font-[diagramm-light] text-[82pt] leading-[82pt] block">
                Assets
              </span>
            </div>

            <Image
              src="/images/page38/asset_p38_1_20250820_114358.png"
              alt="Production Summary"
              fill
              sizes={`${6.6 * 96}px`}
              priority
              className="z-[0]"
           />

            {/* Footer */}
          <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1} height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
          </div>
      
        </div>
      </LetterPage>
    </div>
  );
};

export default Page38;
