import React from "react";

export const Key = ({ keyLetter }) => {
  return (
    <button className="bg-[#3a3a3c] text-white grid place-items-center rounded-md h-11 flex-1">
      {keyLetter}
    </button>
  );
};
