import React from "react";
import { Letter } from "./Letter";
export const Board = () => {
  return (
    <section className="grid m-4 gap-1">
      <div className="flex gap-1">
        <Letter attempt={0} letterPosition={0} />
        <Letter attempt={0} letterPosition={1} />
        <Letter attempt={0} letterPosition={2} />
        <Letter attempt={0} letterPosition={3} />
        <Letter attempt={0} letterPosition={4} />
      </div>
      <div className="flex gap-1">
        <Letter attempt={1} letterPosition={0} />
        <Letter attempt={1} letterPosition={1} />
        <Letter attempt={1} letterPosition={2} />
        <Letter attempt={1} letterPosition={3} />
        <Letter attempt={1} letterPosition={4} />
      </div>
      <div className="flex gap-1">
        <Letter attempt={2} letterPosition={0} />
        <Letter attempt={2} letterPosition={1} />
        <Letter attempt={2} letterPosition={2} />
        <Letter attempt={2} letterPosition={3} />
        <Letter attempt={2} letterPosition={4} />
      </div>
      <div className="flex gap-1">
        <Letter attempt={3} letterPosition={0} />
        <Letter attempt={3} letterPosition={1} />
        <Letter attempt={3} letterPosition={2} />
        <Letter attempt={3} letterPosition={3} />
        <Letter attempt={3} letterPosition={4} />
      </div>
      <div className="flex gap-1">
        <Letter attempt={4} letterPosition={0} />
        <Letter attempt={4} letterPosition={1} />
        <Letter attempt={4} letterPosition={2} />
        <Letter attempt={4} letterPosition={3} />
        <Letter attempt={4} letterPosition={4} />
      </div>
      <div className="flex gap-1">
        <Letter attempt={5} letterPosition={0} />
        <Letter attempt={5} letterPosition={1} />
        <Letter attempt={5} letterPosition={2} />
        <Letter attempt={5} letterPosition={3} />
        <Letter attempt={5} letterPosition={4} />
      </div>
    </section>
  );
};
