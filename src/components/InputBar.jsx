import React from "react";

const InputBar = ({setColour}) => {
  let colors = [
    "#ef4444",
    "#fb923c",
    "#fde047",
    "#10b981",
    "#3b82f6",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <div className="flex flex-col h-150 justify-center gap-3">
      {colors.map((color, i) => {
        return (
          <button onClick={() => setColour(i)} 
            key={i} 
            className="p-3 bg-zinc-700">
            <div className="w-24 h-10 rounded-md" style={{ backgroundColor: color }}></div>
          </button>
        );
      })}
    </div>
  );
};

export default InputBar;
