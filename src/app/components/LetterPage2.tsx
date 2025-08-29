import React from "react";

interface LetterPageProps {
  backgroundColor: string;
  children?: React.ReactNode;
}

const LetterPage2: React.FC<LetterPageProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <div
      className="relative w-[17in] h-[11in]"
      style={{
        backgroundColor: backgroundColor,
        boxShadow: "0 4px 16px rgba(41, 37, 36, 0.05)",
        
      }}
    >
      {children}
    </div>
  );
};

export default LetterPage2;
