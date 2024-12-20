"use client";

import Image from "next/image";
import { useState } from "react";

export function Style({
  image,
  selectStyle,
  isSelected,
}: {
  image: string;
  selectStyle: () => void;
  isSelected: boolean;
}) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={selectStyle}
      className="relative mt-6 w-fit cursor-pointer rounded-2xl shadow-2xl transition-all hover:scale-105"
    >
      {(mouseOver || isSelected) && (
        <>
          <div className="absolute -right-5 -top-2 h-4 w-4 -rotate-45 border-t border-black"></div>
          <div className="absolute -right-2 -top-5 h-4 w-4 rotate-[-75deg] border-t border-black"></div>
          <div className="absolute -right-7 top-2 h-4 w-4 rotate-[-20deg] border-t border-black"></div>
        </>
      )}
      <Image
        src={image}
        width={800}
        height={800}
        className="h-36 max-w-52 rounded-2xl shadow-xl"
        alt="randomImg-1"
      />
    </div>
  );
}
