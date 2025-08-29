// src/app/criteria-checklist/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

type Row = {
  title: string;
  evidence: string;
  reference: string;
};

const rows: Row[] = [
  {
    title: "1. Aesthetics & Functionality",
    evidence:
      "Our proposed solutions thoughtfully balance aesthetics and functionality, aligning with the cultural and healing intent of the space. Each item is priced and selected to support the overall design vision and contribute to the intended look and feel.",
    reference: "Please Reference Page 38",
  },
  {
    title: "2. Dimensions Accuracy",
    evidence:
      "We’ve reviewed our selections to ensure alignment with the design intent and will collaborate with the team to confirm all products meet code requirements. Site verification will be completed by our team.",
    reference: "Please Reference Excel Chart",
  },
  {
    title: "3. Finishes",
    evidence:
      "Finishes match the specification schedule and digital material information is provided. Physical samples will be submitted upon request.",
    reference: "Please Reference Page 38",
  },
  {
    title: "4. Value-Add Suggestions",
    evidence:
      "We’ve outlined the added value of our consulting services.",
    reference: "Please Reference Page 15",
  },
  {
    title: "5. Completeness & Lead Times",
    evidence:
      "All requested documentation is included, and our pricing schedule notes any items at risk. We confirm alignment with the overall project schedule.",
    reference: "Please Reference Page 104",
  },
  {
    title: "6. Warranties & Environmental Certifications",
    evidence:
      "All products come with standard manufacturer warranties and meet sustainability criteria including FSC, BIFMA Level 3, and SCS Indoor Advantage Gold.",
    reference: "Please Reference Pages 108 & 132",
  },
];

const Page12: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        {/* Header with icon + breadcrumb */}
        <Image
          src="/icons/headline_icon_1.svg"
          alt="Executive Summary Icon"
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

        {/* Header text block */}
        <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
          <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846] mr-1">
            Executive Summary »
          </span>
          <span className="font-[LarkenDEMO-Light] text-[15pt] leading-[17.5pt] text-[#4b5846]">
            Criteria Checklist
          </span>
        </div>

        {/* Main Title */}
        <div className="absolute left-[0.75in] top-[1.0486in] text-[#4b5846]">
          <span className="block font-[Diagramm-Bold] text-[17pt] leading-[20pt]">
            Summary Stated Evaluation Criteria
          </span>
        </div>

        {/* Table */}
        <div className="absolute left-[0.75in] top-[1.7in] w-[6.5in]">
          <table className="w-full table-fixed border border-[#333] border-collapse bg-white">
            <colgroup>
              <col style={{ width: "2.2in" }} />
              <col style={{ width: "0.8in" }} />
              <col />
            </colgroup>

            <thead className="bg-[#f8f9fa]">
              <tr className="border-b-2 border-[#333]">
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#333] border-r border-[#ccc]">
                  Evaluation Criteria
                </th>
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#333] border-r border-[#ccc]">
                  Included
                </th>
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#333]">
                  Evidence of Ojiibik Capability
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <React.Fragment key={i}>
                  <tr className="align-top">
                    <td className="p-3 border-r border-[#ccc] align-top">
                      <div className="font-[Diagramm-Bold] text-[10pt] text-[#333] leading-[14pt]">
                        {r.title}
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#ccc] align-top">
                      <img
                        src="/icons/checkmark.png"
                        alt="checkmark"
                        className="inline-block w-[0.26in] h-[0.26in]"
                      />
                    </td>
                    <td className="p-3 align-top">
                      <div className="font-[Diagramm-Regular] text-[9pt] leading-[13pt] text-[#333]">
                        {r.evidence}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#f8f9fa]">
                    <td colSpan={3} className="px-3 py-2 border-t border-[#ddd]">
                      <div className="font-[Diagramm-Bold] text-[9pt] leading-[12pt] text-[#4b5846]">
                        {r.reference}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="absolute left-[7.5in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
          <span>12 of 134</span>
          <Image
            src="/icons/footer.svg"
            alt="Page Number"
            width={1}
            height={1}
            className="select-none w-[0.2848in] h-[0.2848in]"
          />
        </div>
      </LetterPage>
    </div>
  );
};

export default Page12;
