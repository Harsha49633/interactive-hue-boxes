
import { useState, useEffect } from "react";
import Box from "@/components/Box";
import ResetButton from "@/components/ResetButton";

const Index = () => {
  const [clickedBoxes, setClickedBoxes] = useState<number[]>([]);
  const [showingSequence, setShowingSequence] = useState(false);
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(-1);
  const totalBoxes = 9;

  const handleBoxClick = (boxIndex: number) => {
    if (showingSequence || clickedBoxes.includes(boxIndex)) return;
    
    const newClickedBoxes = [...clickedBoxes, boxIndex];
    setClickedBoxes(newClickedBoxes);
    
    // Check if all boxes have been clicked
    if (newClickedBoxes.length === totalBoxes) {
      startSequenceAnimation();
    }
  };

  const startSequenceAnimation = () => {
    setShowingSequence(true);
    setCurrentSequenceIndex(0);
  };

  useEffect(() => {
    if (!showingSequence || currentSequenceIndex >= clickedBoxes.length) return;
    
    const timer = setTimeout(() => {
      setCurrentSequenceIndex(prev => prev + 1);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [showingSequence, currentSequenceIndex, clickedBoxes.length]);

  const resetGame = () => {
    setClickedBoxes([]);
    setShowingSequence(false);
    setCurrentSequenceIndex(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-3xl font-bold mb-8">Interactive 3x3 Matrix</h1>
      
      <div className="mb-8 grid grid-cols-3 gap-4">
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <Box
            key={index}
            index={index}
            onClick={() => handleBoxClick(index)}
            isClicked={clickedBoxes.includes(index)}
            isShowingSequence={showingSequence && clickedBoxes.indexOf(index) < currentSequenceIndex}
          />
        ))}
      </div>
      
      <div className="text-center">
        {showingSequence && currentSequenceIndex >= clickedBoxes.length ? (
          <div className="mb-4 text-lg">Sequence complete!</div>
        ) : (
          <div className="mb-4 text-lg">
            {clickedBoxes.length === 0 
              ? "Click on any box to start" 
              : `Clicked ${clickedBoxes.length} of ${totalBoxes} boxes`}
          </div>
        )}
        
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
};

export default Index;
