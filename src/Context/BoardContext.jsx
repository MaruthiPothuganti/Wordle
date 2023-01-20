import React, { createContext, useState } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const initialBoardState = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  const [boardState, setBoardState] = useState(initialBoardState);

  return (
    <BoardContext.Provider value={{ boardState, setBoardState }}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardProvider, BoardContext };
