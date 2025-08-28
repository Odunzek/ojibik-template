import React from "react";
import LetterPage from "./components/LetterPage";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* <LetterPage backgroundColor="bg-white" /> */}
      <div className="flex flex-wrap gap-8 bg-white text-black">
        {Array.from({ length: 134 }).map((_, index) => (
          <Link key={index} href={`/page${index + 1}`}>
            Page - {index + 1}
          </Link>
        ))}
      </div>
      {/* Uncomment the line below for the green version */}
      {/* <LetterPage backgroundColor="bg-[#4b5846]" /> */}
    </div>
  );
};

export default Page;
