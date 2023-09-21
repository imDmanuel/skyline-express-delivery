"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

export function AchievementCard({
  icon,
  number,
  children,
}: {
  icon: StaticImageData;
  number: number;
  children: string;
}) {
  const countUpRef = useRef<HTMLSpanElement>(null);

  const { start: startCountUp } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: number,
  });

  return (
    <div className="text-center border border-[#247194] py-5 bg-secondary cursor-pointer group hover:bg-[#1C617F]">
      {/* ICON */}
      <div className="w-16 mx-auto rounded-full bg-white group-hover:bg-primary border-2 border-primary p-3">
        <Image src={icon} alt="" className="aspect-square object-contain" />
      </div>
      {/* END ICON */}

      {/* NUMBER */}
      <div className="font-semibold text-xl text-primary my-2">
        + <span ref={countUpRef}></span>
      </div>
      {/* END NUMBER */}

      {/* LABEL */}
      <p className="text-xs text-white font-light">{children}</p>
      {/* END LABEL */}
    </div>
  );
}
