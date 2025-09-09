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

const Page71: React.FC = () => {
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
              Floor 3
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in] w-[6.2in] text-[#4b5846]">
            <div className="flex items-baseline flex-nowrap">
              <span className="mr-2 whitespace-nowrap font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
                Bedrooms »
              </span>
              <span className="min-w-0 whitespace-normal font-[LarkenDEMO-Medium] text-[15pt] leading-[17.5pt]">
                306A, 306B, 307A, 307B, 308A, 308B, 309A, 309B, 310A, 310B
              </span>
            </div>
          </div>





          {/* Top product image  */}
          <div className="absolute left-[0.748in] top-[1.2206in] w-[6.9883in] h-[7.42in] z-0">
            <Image
              src="/images/page71/asset_p71_1_20250819_134536.png"
              alt="table"
              fill
              className="object-contain"
              sizes={`${6.6 * 96}px`}
              priority
            />
          </div>
                    
          {/* Expansion table */}
          <div className="absolute left-[0.7558in] top-[8.9351in] ">          
            <div className=" font-[LarkenDEMO-regular] text-[24pt] leading-[28pt] text-[#4b5846]">
              Hardi Bed
              <div className="mt-2 mb-2 h-[2px] w-[5.3726in] bg-[#4b5846]" />
            </div>

            <div className=" absolute  text-[9pt] leading-[11pt] text-[#333] font-[Diagramm-Regular]">
              <div className="text-[#333]">Nightstand</div>
              <div className="font-[Diagramm-Bold]">B-1 </div>
              <div className="font-[Diagramm-Bold]">Spec</div>
              <div>$14,685.20</div>
            </div>
          </div>

                  {/* Bottom-right product */}
          <div className="absolute left-[4.3362in] top-[6.1106in] w-[3.4in]">

          </div>
             {/* bottom logo */}
            <Image
              src="/icons/spec.png"
              alt="spec Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[6.793in] top-[8.3627in] w-[0.7787in] h-[0.171in] absolute z-1"
              priority
            /> 


          {/* pill */}
          <div>
            <div className="absolute left-[6.3112in] top-[9.3558in]">
                  <Pill2 label="Brochure" />
            </div>
            <div className="absolute left-[6.3176in] top-[9.9054in]">
                    <Pill label="Finishes" />
            </div>
          </div>

            {/* Disclaimer */}
          <div className="absolute left-[0.6955in] top-[10.4144in] w-[7.25in] text-[7pt] leading-[11pt] text-[#6b6f6a] font-[Diagramm-Regular]">
            *Finishes are for illustration purposes only; products may vary. Please note that some sizes may vary; refer to exact pricing document.
          </div>

          {/* Footer */}
          <div className="absolute left-[7.5in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <span>71 of 134</span>
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1}
              height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
          </div>
      </div>

      </LetterPage>
    </div>
  );
};

export default Page71;
