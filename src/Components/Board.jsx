import React from "react";
import { Letter } from "./Letter";
export const Board = () => {
  return (
    <section className="grid m-4 gap-1">
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="flex gap-1">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    </section>
  );
};
