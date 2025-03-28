
import React from "react";
import { cn } from "@/lib/utils";

interface BoxProps {
  index: number;
  onClick: () => void;
  isClicked: boolean;
  isShowingSequence: boolean;
}

const Box: React.FC<BoxProps> = ({ index, onClick, isClicked, isShowingSequence }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-md flex items-center justify-center text-3xl font-bold transition-colors duration-300",
        isShowingSequence 
          ? "bg-orange-400 hover:bg-orange-500"
          : isClicked 
            ? "bg-green-500 hover:bg-green-600" 
            : "bg-white hover:bg-gray-100"
      )}
      disabled={isClicked && !isShowingSequence}
      aria-label={`Box ${index + 1}`}
    >
      {index + 1}
    </button>
  );
};

export default Box;
