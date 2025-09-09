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

const Page81: React.FC = () => {
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
            Floor 4 & 5
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in]  text-[#4b5846]">
            <div className="flex items-baseline flex-nowrap">
              <span className="mr-2 whitespace-nowrap font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
                Living Space » 
              </span>
              <span className="min-w-0 whitespace-normal font-[LarkenDEMO-Medium] text-[15pt] leading-[17.5pt]">
                405A, 406A, 407A, 408A, 505A, 506A, 507A, 508A
              </span>
            </div>
          </div>


          {/* Right spec block */}
          <div className="absolute left-[6.124in] top-[1.2206in] w-[2.1in] text-[#4b5846]">
            <div className="font-[LarkenDEMO-Light] text-[20pt] leading-[18pt]">
              <p>Spec</p>
              
              <p>Credenza</p>
            </div>
            <div className="mt-2 text-[#333] z-1">
              <div className="font-[Diagramm-Regular] text-[8.5pt] leading-[11pt]">
                <div className="mb-2 h-[2px] w-[157px] bg-[#7b7f78]" />
                <span className="text-[#333]">Credenza</span>
                <div className="mt- font-[Diagramm-Bold]">CR-1</div>
                <div className="font-[Diagramm-Bold]">Spec</div>
                <div>$21,041.44</div>
              </div>
            </div>
          </div>

          {/* pills */}
          <div>
            <div className="absolute left-[6.3149in] top-[4.4658in]">
                  <Pill2 label="Brochure" />
            </div>
            <div className="absolute left-[6.3176in] top-[5.0154in]">
                <Pill label="Finishes" />
            </div>
          </div>

          {/* Top product image  */}
          <div className="absolute left-[0.748in] top-[1.2206in] w-[5.2161in] h-[4.1636in] z-0">
            <Image
              src="/images/page81/asset_p81_1_20250903_142819.png"
              alt="table"
              fill
              className="object-contain"
              sizes={`${6.6 * 96}px`}
              priority
            />
          </div>
        

              {/* logo */}
            <Image
              src="/icons/spec.png"
              alt="spec Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[5.2663in] top-[5.0053in] w-[0.5161in] h-[0.1332in] absolute z-1"
              priority
            />
        
          {/*  Horizontal divider (middle of page) */}
          <div className="absolute left-[0.748in] top-[5.745in] h-[1px] w-[7.001in] bg-[#e7e7e7]" />

                  {/* Bottom-left product */}
          <div className="absolute left-[0.748in] top-[6.1106in] w-[3.4128in]">
            <div className="relative h-[2.75in] w-full">
              <Image
                src="/images/page81/asset_p81_1_20250903_142827.png"
                alt="Expansion Learning Table"
                fill
                className="object-contain"
                sizes={`${3.45 * 96}px`}
              />
            </div>
          </div>

              {/* top logo */}
            <Image
              src="/icons/groupelacasse.png"
              alt="Groupe Lacasse Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[3.6848in] top-[8.6299in] w-[0.3136in] h-[0.1433in] absolute z-1"
              priority
            />          
          {/* Expansion table */}
          <div className="absolute left-[0.7558in] top-[8.9351in] ">          
            <div className=" font-[LarkenDEMO-Light] text-[20pt] leading-[16pt] text-[#4b5846]">
              Quorum Multiconference
              <div className="mt-2 mb-2 h-[1px] w-[3.405in] bg-[#4b5846]" />
            </div>

            <div className=" absolute  text-[9pt] leading-[11pt] text-[#333] font-[Diagramm-Regular]">
              <div className="text-[#333]">Credenza</div>
              <div className="font-[Diagramm-Bold]">CR-1</div>
              <div className="font-[Diagramm-Bold]">Groupe Lacasse</div>
              <div>$4,947.92</div>
            </div>
          </div>
          {/* pill */}
          <div className="absolute left-[2.726in] top-[9.9054in]">
                <Pill label="Finishes" />
          </div>

                  {/* Bottom-right product */}
          <div className="absolute left-[4.3362in] top-[6.1106in] w-[3.4in]">
            <div className="relative h-[2.7in] w-full">
              <Image
                src="/images/page81/asset_p81_1_20250903_142833.png"
                alt="Manhattan Flip Top Table"
                fill
                className="object-contain"
                sizes={`${3.45 * 96}px`}
              />
            </div>
          </div>
             {/* bottom right logo */}
            <Image
              src="/icons/teknion.png"
              alt="teknion Logo"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="left-[7.2859in] top-[8.6513in] w-[0.3727in] h-[0.0803in] absolute z-1"
              priority
            /> 

          {/* Expansion Casegoods */}
          <div className="absolute left-[4.344in] top-[8.9351in] ">          
            <div className=" font-[LarkenDEMO-Light] text-[20pt] leading-[16pt] text-[#4b5846]">
              Expansion Casegoods
              <div className="mt-2 mb-2 h-[1px] w-[3.405in] bg-[#4b5846]" />
            </div>

            <div className=" absolute  text-[9pt] leading-[11pt] text-[#333] font-[Diagramm-Regular]">
              <div className="text-[#333]">Credenza</div>
              <div className="font-[Diagramm-Bold]">CR-3</div>
              <div className="font-[Diagramm-Bold]">Teknion</div>
              <div>$9,453.12</div>
            </div>
          </div>
          {/* pill */}
          <div>
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
            <span>81 of 134</span>
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

export default Page81;
