// src/app/testpage1/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page12: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      
      <LetterPage backgroundColor="white">
        {/* Icon */}
        <Image
          src="/icons/headline_icon_1.svg"
          alt="Executive Summary Icon"
          width={1} height={1}                         
          className="absolute left-[0.2842in] top-[0.338in]  w-[0.1815in] h-[0.199in] "
        />

        <Image
            src="/icons/header-vert-line.png"
            alt="vertical line"
            width={1}
            height={1}
            className=" absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-[1]"
        />

        {/* Header text block */}
        <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
          <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846]">
            Executive Summary »
          </span>
          {/* exact gap */}
          <span className="  font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-[#4b5846]">
            Criteria Checklist
          </span>
        </div>

        {/* Title  */}
        <div className="absolute left-[0.75in] top-[1.0486in] text-[#4b5846]">
          <span className="font-[Diagramm-Bold] text-[17pt] leading-[20pt]">
            Summary of Stated Evaluation Criteria
          </span>
        </div>

        {/* Content image */}
        <Image
          src="/images/page12/page12_1.png"
          alt="Content Watermark"
          width={7 * 96}
          height={8.69 * 96}
          className="absolute select-none border-b-[1px] border-[#4b5846]"
          style={{
            left: "0.75in",
            top: "1.5625in",
            zIndex: 0,
            opacity: 0.8,
          }}
        />

        {/* Footer */}
        <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
          <Image
            src="/icons/footer.svg"
            alt="Page Number"
            width={1} height={1}
            className="select-none w-[0.2848in] h-[0.2848in]"
          />
          <span>12 of 134</span>
        </div>
      </LetterPage>
    </div>
  );
};

export default Page12;
