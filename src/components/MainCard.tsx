import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function MainCard() {
  const [IsOpenWhy, setIsOpenWhy] = useState(false);

  return (
    <div className="flex flex-col items-center px-4 mt-4">
      <h1 className="text-xl font-bold">Yet Another Pokedex Project</h1>
      <div className="flex flex-col items-center w-full p-1 border border-red-400 rounded-lg">
        <div className="flex items-center gap-1">
          <p className={`text-xl border-b ${IsOpenWhy && "border-blue-700"}`}>
            But why ?
          </p>
          <FaCaretDown
            className="cursor-pointer"
            onClick={() => {
              setIsOpenWhy((prevIsOpenWhy) => !prevIsOpenWhy);
            }}
          />
        </div>
        <div
          className={`grid bg-lime-100 overflow-hidden transition-all origin-top duration-300 ${
            IsOpenWhy
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-justify">
            I've been a bit away from React Development and wanted to do a
            classic project in the least amount of time to brush up my previous
            skills and get the ball rolling and I also like pokemon
          </p>
        </div>
      </div>
    </div>
  );
}
