// src/app/testpage1/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const TestPage1: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        {/* Positioning context for this page */}
        <div className="relative w-full h-full mt-[1in]">
          {/* ——— Section 1 ——— */}
          <div>
            <Image
              src="/icons/headline_icon_1.svg"
              alt="Headline Icon"
              width={1}
              height={1}
              className="absolute left-[1in] top-[0.36in] z-[2] w-[0.26in] h-[0.28in]"
            />
            <div className="absolute left-[1.47in] top-[0.36in] z-[2] text-[#4b5846] font-[Diagramm-Bold] text-[17pt] leading-[23pt]">
              1 ......Executive Summary
            </div>
            <div className="absolute left-[1.47in] top-[0.8in] z-[2] text-[#4b5846] font-[Diagramm-Medium] text-[13pt] leading-[23pt]">
              <p>8 ........Attachment A</p>
              <p>12 ......Summary of Stated Evaluation Criteria</p>
              <p>14 ......Why Ojiibik + In Addition</p>
              <p>16 ......Phases of Production</p>
              <p>18 ......Your Delivery Team</p>
              <p>24 ......Our Six Step Process</p>
            </div>
          </div>

          {/* ——— Section 2 ——— */}
          <div>
            <Image
              src="/icons/headline_icon_2.svg"
              alt="Headline Icon"
              width={1}
              height={1}
              className="absolute left-[1in] top-[2.81in] z-[2] w-[0.28in] h-[0.27in]"
            />
            <div className="absolute left-[1.47in] top-[2.81in] z-[2] text-[#4b5846] font-[Diagramm-Bold] text-[17pt] leading-[23pt]">
              2 .....Product Solution
            </div>
            <div className="absolute left-[1.47in] top-[3.17in] z-[2] text-[#4b5846] font-[Diagramm-Medium] text-[13pt] leading-[23pt]">
              <p>28 .....Floor Plans</p>
              <p>31 ......Renderings</p>
              <p>38 .....Lookbook</p>
            </div>
          </div>

          {/* ——— Section 3 ——— */}
          <div>
            <Image
              src="/icons/headline_icon_3.svg"
              alt="Headline Icon"
              width={1}
              height={1}
              className="absolute left-[1in] top-[4.34in] z-[2] w-[0.28in] h-[0.27in]"
            />
            <div className="absolute left-[1.47in] top-[4.34in] z-[2] text-[#4b5846] font-[Diagramm-Bold] text-[17pt] leading-[20pt]">
              3 .....Financial Proposal
            </div>
            <div className="absolute left-[1.47in] top-[4.69in] z-[2] text-[#4b5846] font-[Diagramm-Medium] text-[13pt] leading-[23pt]">
              <p>102 ....Project Timeline</p>
              <p>104 ....Terms and Conditions</p>
              <p>106 ... Warranties</p>
              <p>112 .....Letters of Recommendations</p>
            </div>
          </div>

          {/* ——— Section 4 ——— */}
          <div>
            <Image
              src="/icons/headline_icon_4.svg"
              alt="Headline Icon"
              width={1}
              height={1}
              className="absolute left-[1in] top-[6.17in] z-[2] w-[0.28in] h-[0.28in]"
            />
            <div className="absolute left-[1.47in] top-[6.2in] z-[2] text-[#4b5846] font-[Diagramm-Bold] text-[17pt] leading-[20pt]">
              4 .....Corporate Info
            </div>
            <div className="absolute left-[1.47in] top-[6.55in] z-[2] text-[#4b5846] font-[Diagramm-Medium] text-[13pt] leading-[23pt]">
              <p>116 .....Exclusive Insight</p>
              <p>120 ....Case Studies</p>
            </div>
          </div>

          {/* ——— Section 5 ——— */}
          <div>
            <Image
              src="/icons/headline_icon_5.svg"
              alt="Headline Icon"
              width={1}
              height={1}
              className="absolute left-[1in] top-[7.32in] z-[2] w-[0.35in] h-[0.35in]"
            />
            <div className="absolute left-[1.47in] top-[7.39in] z-[2] text-[#4b5846] font-[Diagramm-Bold] text-[17pt] leading-[20pt]">
              5 .....Environment and Sustainability
            </div>
            <div className="absolute left-[1.47in] top-[7.75in] z-[2] text-[#4b5846] font-[Diagramm-Medium] text-[13pt] leading-[23pt]">
              <p>124 .....Diversity, Equity, and Inclusion + Claims and Flexibility</p>
              <p>126 ....Accessibility and Ergonomics + Quality Management</p>
              <p>128 ....Sustainability Strategy + Furniture Decommissioning</p>
              <p>130 ....Foundation Programs + LEED &amp; WELL</p>
            </div>
          </div>
        </div>

        <Image
          src="/images/page6/content.png"
          alt="Content Watermark"
          width={200}
          height={800}
          className="absolute left-[7in] top-[0in] w-[1.5in] h-[10.5533in] select-none"
        />
      </LetterPage>
    </div>
  );
};

export default TestPage1;
