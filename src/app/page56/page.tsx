"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

// Re-usable pill
const Pill = ({ label }: { label: string }) => (
  <div className="inline-flex items-center w-[1.4326in] h-[0.36in] justify-center rounded-full px-4 py-1 text-[9pt] font-[Diagramm-Bold] text-[#4b5846] bg-[#e3e9e2] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
    {label}
  </div>
);
const Pill2 = ({ label }: { label: string }) => (
  <div className="inline-flex items-center w-[1.4326in] h-[0.36in] justify-center rounded-full px-4 py-1 text-[9pt] font-[Diagramm-Bold] text-black border-1 border-[#4b5846] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
    {label}
  </div>
);

const page56: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in] ">
          {/* Icon + header */}
          <Image
            src="/icons/headline_icon_2.svg"
            alt="Production Summary"
            width={1}
            height={1}
            className="absolute left-[0.2842in] top-[0.338in] w-[0.1815in] h-[0.199in]"
          />
          <Image
            src="/icons/header-vert-line.png"
            alt="vertical line"
            width={1}
            height={1}
            className="absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-[1]"
          />
          <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
            <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846]">
              Production Solution »
            </span>
            <span className="ml-1 font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-[#4b5846]">
              Floor 2
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in] text-[#4b5846]">
            <span className="font-[Larken-Regular] text-[26.4pt] leading-[31.68pt] block">
              Program Space » 212
            </span>
          </div>


          {/* Right spec block */}
          <div className="absolute left-[6.124in] top-[0.8681in] w-[2.1in] text-[#4b5846]">
            <div className="font-[LarkenDEMO-Light] text-[20pt] leading-[18pt]">
              <p>Quorum</p>
              <p>Multiconference</p>
            </div>
            <div className="mt-2 text-[#333] z-1">
              <div className="font-[Diagramm-Regular] text-[8.5pt] leading-[11pt]">
                <div className="mb-2 h-[2px] w-[120px] bg-[#7b7f78]" />
                <span className="text-[#7b7f78]">Adjustable Height Table</span>
                <div className="mt- font-[Diagramm-Bold]">T-4</div>
                <div className="font-[Diagramm-Bold]">Groupe Lacasse</div>
                <div>$2,952.06</div>
              </div>
            </div>
          </div>

          <div className="absolute left-[6.3176in] top-[5.0154in]">
              <Pill label="Finishes" />
          </div>

          {/* Top product image  */}
          <div className="absolute left-[0.748in] top-[1.2206in] w-[5.2161in] h-[5.1636in] z-0">
            <Image
              src="/images/page56/asset_p56_1_20250819_134102.png"
              alt="table"
              fill
              className="object-contain"
              sizes={`${10 * 96}px`}
              priority
            />
          </div>
        

              {/* top logo */}
            <Image
              src="/icons/groupelacasse.png"
              alt="Groupe Lacasse Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[5.2663in] top-[5.0053in] w-[0.4787in] h-[0.2188in] absolute z-1"
              priority
            />
        
          {/*  Horizontal divider (middle of page) */}
          <div className="absolute left-[0.748in] top-[5.745in] h-[1px] w-[7.001in] bg-[#e7e7e7]" />

                  {/* Bottom-left product */}
          <div className="absolute left-[0.75in] top-[6.1106in] w-[5.2161in]">
            <div className="relative h-[4.1636in] w-full">
              <Image
                src="/images/page56/asset_p56_1_20250819_134117.png"
                alt="Expansion Learning Table"
                fill
                className="object-contain"
                sizes={`${3.45 * 96}px`}
              />
            </div>
          </div>

              {/* bottom logo */}
            <Image
              src="/icons/teknion.png"
              alt="Teknion Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[5.2168in] top-[9.9896in] w-[0.5779in] h-[0.1245in] absolute z-1"
              priority
            />          
          {/* Expansion table */}
          <div className="absolute left-[6.124in] top-[6.1042in] ">          
            <div className=" font-[LarkenDEMO-Light] text-[20pt] leading-[16pt] text-[#4b5846]">
              <p>hiSpace </p>
              <p>Table</p>
              <div className="mt-2 mb-2 h-[1px] w-[1.625in] bg-[#4b5846]" />
            </div>

            <div className=" absolute  text-[9pt] leading-[11pt] text-[#333] font-[Diagramm-Regular]">
              <div className="text-[#7b7f78]">Adjustable Height Table</div>
              <div className="font-[Diagramm-Bold]">T-4 </div>
              <div className="font-[Diagramm-Bold]">Teknion</div>
              <div>$3,112.83</div>
            </div>
          </div>
          {/* pill */}
          <div className="absolute left-[6.3136in] top-[9.9054in]">
                <Pill label="Finishes" />
          </div>



        {/* Footer */}
        <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
          <Image
            src="/icons/footer.svg"
            alt="Page Number"
            width={1} height={1}
            className="select-none w-[0.2848in] h-[0.2848in]"
          />
          <span>56 of 134</span>
        </div>
      </div>

      </LetterPage>
    </div>
  );
};

export default page56;
