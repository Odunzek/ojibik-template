// src/app/attachment-a/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const page10: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LetterPage backgroundColor="white">
        {/* Header with icon + breadcrumb */}


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
          <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-black mr-1">
            Executive Summary »
          </span>
          {/* exact gap */}
          <span className="  font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-black">
            Attachment A
          </span>
        </div>



        {/* Main Title */}
        <div className="flex">
          <div className="absolute left-[0.75in] top-[1.0486in] text-[#4b5846] ">
            <span className="font-[Diagramm-Bold] text-[17pt] leading-[13pt] font-bold block mb-4">
              Furniture RFP Attachment A:
            </span>
            <span className="font-[Diagramm-Bold] text-[17pt] leading-[13pt] font-bold ">
              Confirmation of Intent to Respond
            </span>
          </div>

          {/* Project Info */}
          <div className="absolute left-[0.75in] top-[1.8in] text-[#333]">
            <span className="font-[HelveticaNeue] text-[10pt] leading-[13pt] block mb-4">
             Project: Thunder Woman Healing Lodge
            </span>

            <span className="font-[HelveticaNeue] text-[10pt] leading-[13pt]">
              Due Date: Tuesday, April 8th, 2025 at 4:00 p.m.
            </span>
          </div>
        </div>

        {/* To Section */}
        <div className="flex">
            <span className="absolute left-[0.88in] top-[2.9052in] font-[Diagramm-bold] text-[10pt] text-[#333]">
              To:
            </span>
          

          <div className="absolute left-[1.45in] top-[2.9052in] w-[6in] space-y-3 text-[#333]">

          {/* Company Name */}
          <div className="flex items-center">
            <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Company Name:</span>
            <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
              Turner &amp; Townsend
            </span>
          </div>

          {/* Contact Name */}
          <div className="flex items-center">
            <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Contact Name:</span>
            <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
              Suman Danef
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center">
            <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Address:</span>
            <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
              120 Bremner Blvd., Suite 1100, Toronto, Ontario M5J 0A8
            </span>
          </div>

          {/* Telephone */}
          <div className="flex items-center">
            <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Telephone:</span>
            <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
              647-988-2161
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Email:</span>
            <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
              Suman.Danef@cbre.com
            </span>
          </div>
          </div>

          {/* --- FROM Section --- */}
          <span className="absolute left-[0.88in] top-[5.3819in] font-[Diagramm-bold] text-[10pt] text-[#333]">
              From:
          </span>
          <div className="absolute left-[1.45in] top-[5.3819in] w-[6in] space-y-3 text-[#333]">

            {/* Proponent Name */}
            <div className="flex items-center">
              <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Proponent Name:</span>
              <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
                Ojiibik Inc.
              </span>
            </div>

            {/* Contact Name */}
            <div className="flex items-center">
              <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Contact Name:</span>
              <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
                Mahesh Babooram
              </span>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Address:</span>
              <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
                145 Tecumseth St., Toronto, ON M6J 2H5
              </span>
            </div>

            {/* Telephone */}
            <div className="flex items-center">
              <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Telephone:</span>
              <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
                416-475-9366
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <span className="w-[1.2in] font-[Diagramm-Bold] text-[10pt] mr-4">Email:</span>
              <span className="flex-1 border-b border-[#333] font-[HelveticaNeue] text-[13pt] pb-1">
                maheshb@ojiibik.ca
              </span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="relative text-[#333]">
          <p className="absolute left-[0.75in] top-[8.0652in] w-[6.71in] font-[HelveticaNeue] text-[10pt] leading-[13pt] text-[#333]">
            Please indicate your intent to respond to the Project RFP ("RFP") by checking one of the boxes below and
            returning the document to the Turner &amp; Townsend contact noted above.
          </p>
        

        {/* Checkbox: We intend to respond */}
        
          <div className="relative flex items-center">
            <Image
              src="/icons/checkmark.png"
              alt="checkmark"
              width={1}
              height={1}
              className="absolute left-[1.0281in] top-[8.6898in] w-[0.2686in] h-[0.2661in]"
            />
            <span className="font-[HelveticaNeue] text-[10pt] leading-[13pt] absolute left-[1.878in] top-[8.7992in]">
              We intend to respond.
            </span>
          </div>

          {/* Checkbox: We do not intend to respond */}
          <div className="flex items-center ">
          <Image
              src="/icons/circle.png"
              alt="circle"
              width={1}
              height={1}
              className="absolute left-[1.0281in] top-[9.3183in] w-[0.2686in] h-[0.2661in]"
            />
            <span className="absolute left-[1.878in] top-[9.4192in] leading-[13pt] font-[HelveticaNeue] text-[10pt]">
              We do <strong>not</strong> intend to respond.
            </span>
          </div>
        </div>


        {/* Bottom divider */}
        <div className="absolute left-[0.75in] top-[9.15in] w-[4in] h-px bg-[#333]" />

        {/* Footer */}
        <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
          <Image
            src="/icons/footer.svg"
            alt="Page Number"
            width={1} height={1}
            className="select-none w-[0.2848in] h-[0.2848in]"
          />
          <span>10 of 134</span>
        </div>
      </LetterPage>
    </div>
  );
};

export default page10;
