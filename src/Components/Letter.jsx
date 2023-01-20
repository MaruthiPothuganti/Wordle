import React, { useContext } from "react";
import { BoardContext } from "../Context/BoardContext";

export const Letter = ({ attempt, letterPosition }) => {
  const { boardState, setBoardState } = useContext(BoardContext);
  const letter = boardState[attempt][letterPosition];
  return (
    <div className="h-14 w-14 bg-[#3a3a3c] text-white text-4xl grid place-items-center select-none">
      {letter}
    </div>
  );
};
