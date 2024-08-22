import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";

function ProgressForBaby() {
  const [filledWidth, setFilledWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFilledWidth((prevFilledWidth) => {
        if (prevFilledWidth > 98) {
          clearInterval(interval);
        }
        return prevFilledWidth + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [98]);
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50">
        <div className="absolute top-[50%] left-[50%] z-50 w-[30%] md:w-[20%] translate-x-[-50%] translate-y-[-50%] gap-4 border md:p-6 p-2 shadow-lg rounded-2xl items-center justify-center text-center bg-white opacity-100">
          <div className="md:py-[30px]">
            <HashLoader color="#16b6d4" className="mx-auto md:mb-11 mb-2" />
            <span className="md:text-xl text-[10px] font-bold text-[#409afa] text-center mb-3">
              {filledWidth}%
            </span>
            <br />
            <span className="md:text-xl text-[10px] font-bold text-[#409afa]">
              Please wait some minutes...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressForBaby;
