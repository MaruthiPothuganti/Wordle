import React from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { IoBackspaceOutline } from "react-icons/io5";

const keysLine1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysLine2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysLine3 = ["Z", "X", "C", "V", "B", "N", "M"];

export const Keyboard = () => {
  return (
    <section className="grid gap-3  m-4 sm:w-[60%] md:w-[40%] w-[90%]">
      <div className="flex gap-2">
        {keysLine1.map((key) => (
          <button className="bg-[#3a3a3c] text-white grid place-items-center rounded-md h-11 flex-1">
            {key}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-[0.5]"></div>
        {keysLine2.map((key) => (
          <button className="h-11  bg-[#3a3a3c] text-white grid place-items-center rounded-md flex-1">
            {key}
          </button>
        ))}
        <div className="flex-[0.5]"></div>
      </div>
      <div className="flex gap-2">
        <button className="h-11 w-20 bg-[#3a3a3c] text-white grid place-items-center rounded-md flex-1">
          <AiOutlineEnter
            size={30}
            className="bg-transparent p-1"
            title="Enter"
          />
        </button>
        {keysLine3.map((key) => (
          <button className="h-11  bg-[#3a3a3c] text-white grid place-items-center rounded-md flex-1">
            {key}
          </button>
        ))}
        <button className="h-11 w-14 bg-[#3a3a3c] text-white grid place-items-center rounded-md flex-1">
          <IoBackspaceOutline
            size={30}
            className="bg-transparent p-1"
            title="Delete"
          />
        </button>
      </div>
    </section>
  );
};
