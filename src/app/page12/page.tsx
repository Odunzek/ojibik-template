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

        <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
          <span className="mr-1 font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846]">
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

        
        <div className="absolute left-[0.75in] top-[1.5in] w-[7in] h-[8.6979in]">
          {/* table: fill the wrapper height */}
          <table className="w-full h-full table-fixed border-t-3 border-[#4b5846] border-collapse bg-white">
            <colgroup>
              <col style={{ width: "2in" }} />
              <col style={{ width: "0.95in" }} />
              <col />
            </colgroup>

            <thead className="">
              {/* fixed header height (tune if needed) */}
              <tr className="border-b-3 border-[#4b5846] h-[0.4in]">
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#4b5846] border-r-2 border-[#4b5846]">
                  Evaluation Criteria
                </th>
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#4b5846] border-r-2 border-[#4b5846]">
                  Included
                </th>
                <th className="p-2 text-left font-[Diagramm-Bold] text-[9pt] text-[#4b5846]">
                  Evidence of Ojiibik Capability
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  
                  style={{ height: "calc((8.5in - 0.4in) / 6)" }}
                  className="border-b  border-[#4b5846] align-middle"
                >
                  {/* Center everything: vertical + horizontal */}
                  <td className="border-r-2 border-[#4b5846] p-3 align-middle text-center">
                    <div className="font-[Diagramm-Bold] text-[10pt] leading-[14pt] text-[#4b5846]">
                      {r.title}
                    </div>
                  </td>

                  <td className="border-r-2 border-[#4b5846] p-3 align-middle text-center">
                    <img
                      src="/icons/checkmark.png"
                      alt="checkmark"
                      className="inline-block h-[0.266in] w-[0.268in]"
                    />
                  </td>

                  <td className="p-3 align-top text-left">
                    <div className="flex h-full flex-col justify-between">
                      <div className="font-[Diagramm-Regular] text-[9pt] leading-[13pt] text-[#333]">
                        {r.evidence}
                      </div>

                      {/* sits on the bottom edge of the cell */}
                      <div className="font-[Diagramm-Bold] text-[9pt] leading-[12pt] text-[#4b5846]">
                        {r.reference}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
            <tr className="border-t-3 border-[#4b5846]">
              <td colSpan={3}></td>
              </tr>
            </tfoot>

          </table>
        </div>


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
