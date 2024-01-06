import { ShipmentEvent } from "@/lib/types";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";

export function ShipmentTimeline({
  shipmentEvents,
}: {
  shipmentEvents: ShipmentEvent[];
}) {
  return (
    <div className="overflow-x-auto">
      {shipmentEvents.map((shipmentEvent) => {
        return (
          <>
            {/* TIMELINE ITEM */}
            <div className="grid grid-cols-[150px_20px_1fr] items-start gap-x-6 pb-5 last:pb-0">
              {/* EVENT DATE */}
              <div className="text-sm">
                {new Date(
                  shipmentEvent.attributes.timestamp
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  year: "numeric",
                  month: "2-digit",
                  day: "numeric",
                  hour12: true,
                })}
              </div>
              {/* END EVENT DATE */}

              {/* EVENT ICON */}
              <div className="relative h-full flex justify-center">
                <FaCircleDot className="" />

                <div className="absolute w-0 top-[calc(16px_+_50%)] border border-black h-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              {/* END EVENT ICON */}

              {/* EVENT DETAILS */}
              <div>
                <div className="font-medium">
                  {shipmentEvent.attributes.description}
                </div>
                <div className="text-sm">
                  {shipmentEvent.attributes.location}
                </div>
                <div className="text-xs bg-secondary py-1 px-2 inline-block text-white rounded-full">
                  {shipmentEvent.attributes.status}
                </div>
              </div>
              {/* END EVENT DETAILS */}
            </div>
            {/* TIMELINE ITEM */}
          </>
        );
      })}
    </div>
  );
}
