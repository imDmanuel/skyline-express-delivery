"use client";

import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";

const TimelineContext = React.createContext<{ isLast?: boolean }>({
  isLast: false,
});

function Timeline({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function TimelineItem({
  children,
  isLast,
}: {
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <TimelineContext.Provider value={{ isLast }}>
      <div className="grid grid-cols-[60px_1fr] gap-5 items-center mb-12">
        {children}
      </div>
    </TimelineContext.Provider>
  );
}

function TimelineItemIcon({ icon }: { icon: StaticImageData }) {
  const { isLast } = useContext(TimelineContext);
  return (
    <div className="relative aspect-square rounded-full bg-primary/50 ring-1 ring-primary/60">
      <div className="m-4">
        <Image src={icon} alt="" />
      </div>

      {isLast ? null : (
        <div className={`absolute left-1/2 timeline-line`}></div>
      )}
    </div>
  );
}

function TimelineItemContent({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <div className="font-semibold text-secondary">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

export { Timeline, TimelineItem, TimelineItemIcon, TimelineItemContent };
