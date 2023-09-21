import Image, { StaticImageData } from "next/image";
import React from "react";

export function OfferCard({
  icon,
  title,
  children,
}: {
  icon: StaticImageData;
  title: string;
  children: string;
}) {
  return (
    <div className="bg-white shadow-md px-5 pt-5 pb-16 border-b-4 border-b-primary">
      {/* CARD ICON */}
      <Image src={icon} alt="" className="w-9" />
      {/* END CARD ICON */}

      {/* CARD TITLE */}
      <h4 className="font-semibold my-3 text-secondary">{title}</h4>
      {/* END CARD TITLE */}

      {/* CARD CONTENT */}
      <p className="text-sm font-medium">{children}</p>
      {/* END CARD CONTENT */}
    </div>
  );
}
