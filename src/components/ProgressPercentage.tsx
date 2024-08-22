import { useState, useEffect } from "react";

const ProgressPercentage = ({ onComplete }: any) => {
  const [filledWidth, setFilledWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFilledWidth((prevFilledWidth) => {
        if (prevFilledWidth > 98) {
          clearInterval(interval);
          onComplete();
        }
        return prevFilledWidth + 1;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [98]);

  return (
    <span className="md:text-xl text-[10px] font-bold text-[#409afa] text-center mb-3">
      {filledWidth}%
    </span>
  );
};

export default ProgressPercentage;
