"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page67: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="text-center text-lg font-bold text-gray-700">
          Page 67 content goes here.
        </div>
      </LetterPage>
    </div>
  );
};

export default Page67;
