
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600"
    >
      <RefreshCw className="h-4 w-4" />
      <span>Reset Game</span>
    </Button>
  );
};

export default ResetButton;
