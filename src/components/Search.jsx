import React from "react";

export default function Search({ onKeyPress, onChange }) {
  return (
    <div className="w-3/5">
      <input
        type="text"
        placeholder="Search Wine"
        onKeyPress={onKeyPress}
        onChange={onChange}
        name="searchWine"
        className="bg-white focus:outline-none focus:shadow-outline border border-projectPalette-red rounded-xl w-full py-2 px-4 block appearance-none leading-normal"
      />
      
    </div>
  );
}
