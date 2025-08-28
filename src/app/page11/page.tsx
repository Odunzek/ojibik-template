// src/app/attachment-a-continued/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const rows: [string, string, string][] = [
  ["Workstations/Private Offices", "Refer to Lookbook", "Ojiibik"],
  ["Installation of Workstations/Private Offices", "Choice Installations Inc.", "Ojiibik"],
  ["Bedroom Furniture", "Refer to Lookbook", "Ojiibik"],
  ["Installation of Bedroom Furniture", "Choice Installations Inc.", "Ojiibik"],
  ["Ancillary Furniture", "Refer to Lookbook", "Ojiibik"],
  ["Installation of Ancillary Furniture", "Choice Installations Inc.", "Ojiibik"],
];

const page11: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
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
            Attachment A (Continued)
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
          <div className="absolute left-[0.75in] top-[1.8in] w-[6in] text-[#333]">
            <span className="font-[HelveticaNeue] text-[10pt] leading-[13pt] block mb-1">
              LIST OF COMPONENTS THAT YOU WILL BE SUBITTING A PROPOSAL FOR
            </span>

            <span className="font-[HelveticaNeue] text-[10pt] leading-[13pt]">
              Complete list all proposed Furniture Components that you will be submitting a proposal for and the Dealership that you will be partnering with.
            </span>
          </div>
        </div>

        <div>
          {/* Table title */}
          <div className="absolute border-t-2 p-2 w-[6.5in] left-[0.75in] top-[3.1in] font-[Diagramm-Bold] text-[13pt] leading-[13pt] text-[#4b5846] border-[#4b5846]">
            <span className="">
            Table A.1 - Proposed Product &amp; Dealership
            </span>
          </div>

          {/* Table (real table for crisp borders) */}
          <div className="absolute left-[0.75in] top-[3.5in] w-[6.5in]">
            <table className="w-full table-fixed border border-[#ccc] border-collapse bg-white">
              <thead className="bg-[#f8f9fa]">
                <tr className="border-b-2 border-[#333]">
                  <th className="w-[80px] p-2 text-center font-[Diagramm-Bold] text-[9pt] text-[#333] border-r border-[#ccc]">
                    Check Box
                  </th>
                  <th className="w-[200px] p-2 font-[Diagramm-Bold] text-[9pt] text-[#333] border-r border-[#ccc]">
                    Furniture Type
                  </th>
                  <th className="w-[140px] p-2 font-[Diagramm-Bold] text-[9pt] text-[#333] border-r border-[#ccc]">
                    Type
                  </th>
                  <th className="p-2 font-[Diagramm-Bold] text-[9pt] text-[#333]">Dealership</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#ccc]">
                    <td className="p-2 text-center align-middle border-r border-[#ccc]">
                      <img
                        src="/icons/checkmark.png"
                        alt="checkmark"
                        className="inline-block w-[0.2686in] h-[0.2661in]"
                      />
                    </td>
                    <td className="p-2 text-[9pt] font-[Diagramm-Regular] text-[#333] border-r border-[#ccc]">
                      {row[0]}
                    </td>
                    <td className="p-2 text-[9pt] font-[Diagramm-Regular] text-[#333] border-r border-[#ccc]">
                      {row[1]}
                    </td>
                    <td className="p-2 text-[9pt] font-[Diagramm-Regular] text-[#333]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="absolute left-[0.75in] top-[7.2in] w-[6.5in] font-[Diagramm-Regular] text-[9pt] leading-[12pt] text-[#333]">
            The cost of preparation for the RFP, or related changes, and all other costs incurred by the Proponent
            is the sole responsibility of the Proponent. In no event shall Turner &amp; Townsend and/or its Client be
            responsible for reimbursement of these direct or any related costs.
          </div>

          {/* Signature block */}
          <div className="relative">
            <span className="absolute left-[0.85in] font-bold top-[8in] font-[Diagramm-bold] text-[10pt] text-[#333]">
              By:
            </span>
            <span className="absolute left-[1.3in] top-[8in] font-[HelveticaNeue] text-[13pt] text-[#333]">
              Ojiibik
            </span>
            <span className="absolute left-[0.75in] top-[8.3in] h-px w-[3in] bg-[#333]" />
            <span className="absolute left-[1.2in] top-[8.4in] font-[HelveticaNeue] text-[10pt] leading-[14pt] text-[#333]">
              Mahesh Babooram
              <br />
              Co-Founder and CEO
            </span>
          </div>

          {/* Footer */}
          <div className="absolute left-[7.5in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <span>11 of 134</span>            
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

export default page11;
