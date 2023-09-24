// "use client";

import React, { useEffect, useState } from "react";
import { FaCircleDot, FaStar, FaTruck } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { redirect } from "next/navigation";
import { ShipmentTimeline } from "@/components/shipment-timeline";
import axios, { AxiosError, isAxiosError } from "axios";
import { env } from "@/lib/env";
import { Shipment, ShipmentApiResponse } from "@/lib/types";

export default async function TrackingPage({
  searchParams: { trackingId },
}: {
  searchParams: { trackingId: string };
}) {
  async function fetchData(): Promise<
    | {
        success: true;
        data: Shipment;
      }
    | {
        success: false;
        message: string;
      }
  > {
    try {
      let response = await axios.post<ShipmentApiResponse>(
        `http://localhost:3000/api`,
        {
          url: `${env.NEXT_PUBLIC_API_BASE_URL}/shipments/?filters[tracking_number][$eq]=${trackingId}&populate=*`,
          options: {
            headers: {
              authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_REST_TOKEN}`,
            },
          },
        }
      );

      return { success: true, data: response.data.data[0] };
    } catch (e) {
      if (e instanceof AxiosError) {
        return {
          success: false,
          message: e.response?.data.message || "Something went wrong..",
        };
      }

      if (e instanceof Error) {
        return {
          success: false,
          message: e.message || "Something went wrong..",
        };
      }

      return {
        success: false,
        message: "Something went wrong..",
      };
    }
  }

  const queryResponse = await fetchData();

  // TODO: DISPLAY PROPER ERROR MESSAGE
  if (queryResponse.success === false) {
    return <div>{queryResponse.message}</div>;
  }

  const shipmentDetail = queryResponse.data.attributes;

  const latestEventIndex = shipmentDetail.shipment_events.data.length - 1;

  return (
    <main>
      <section className="bg-gray-200">
        <div className="container py-10">
          {/* TRACKING NUMBER */}
          <div className="font-semibold mb-5 py-3 px-2 bg-secondary/80 text-white flex items-center space-x-2">
            <FaStar />
            <div>TRACKING ID: {shipmentDetail.tracking_number}</div>
          </div>
          {/* END TRACKING NUMBER */}

          <div className="grid gap-4 grid-cols-[3fr_5fr]">
            {/* QUICK SHIPMENT DETAILS */}
            <div className="bg-white border-b-2 border-b-primary pt-5 pb-10 px-6">
              {/* SHIPMENT STATUS */}
              <div className="flex space-x-3 items-center my-5">
                {/* ICON */}
                <div className="bg-secondary/80 rounded-full inline-block p-3 border-4 -ml-10 border-white">
                  <FaTruck className="-scale-x-100 text-4xl text-white " />
                </div>
                {/* END ICON */}
                <div>
                  {/* CURRENT STATUS */}
                  <div className="font-bold text-3xl">
                    {
                      shipmentDetail.shipment_events.data[latestEventIndex]
                        .attributes.status
                    }
                  </div>
                  {/* CURRENT STATUS */}

                  {/* DATE OF CURRENT STATUS */}
                  <div>
                    {new Date(
                      shipmentDetail.shipment_events.data.find(
                        (event) =>
                          event.attributes.event_id ===
                          shipmentDetail.shipment_events.data[latestEventIndex]
                            .attributes.event_id
                      )?.attributes.timestamp || ""
                    ).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC",
                    })}
                  </div>
                  {/* END DATE OF CURRENT STATUS */}
                </div>
              </div>
              {/* END SHIPMENT STATUS */}

              <hr className="" />

              <div className="my-7">
                {/* SHIPMENT FROM AND TO */}
                <div className="grid grid-cols-2">
                  {/* SHIPMENT FROM */}
                  <div>
                    <div className="font-semibold">From:</div>
                    <div>
                      {shipmentDetail.origin_city},{" "}
                      {shipmentDetail.origin_state}{" "}
                      {shipmentDetail.origin_country}
                    </div>
                  </div>
                  {/* END SHIPMENT FROM */}

                  {/* SHIPMENT TO */}
                  <div>
                    <div className="font-semibold">To:</div>
                    <div>
                      {shipmentDetail.destination_city},{" "}
                      {shipmentDetail.destination_state}{" "}
                      {shipmentDetail.destination_country}
                    </div>
                  </div>
                  {/* END SHIPMENT TO */}
                </div>
                {/* END SHIPMENT FROM AND TO */}
              </div>
            </div>
            {/* END QUICK SHIPMENT DETAILS */}

            {/* PACKAGE DETAILS */}
            <div className="bg-white border-b-2 border-b-primary pt-5 pb-10 px-6">
              <div className="font-semibold text-lg uppercase mb-3 border-b border-b-primary">
                Package details
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Detail</TableHead>
                    <TableHead>Sender details</TableHead>
                    <TableHead>Receiver details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-semibold">
                  <TableRow>
                    <TableCell>Name:</TableCell>
                    <TableCell>{shipmentDetail.shipper_name}</TableCell>
                    <TableCell>{shipmentDetail.recipient_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Address: </TableCell>
                    <TableCell className="">
                      {shipmentDetail.shipper_address}
                    </TableCell>

                    <TableCell className="">
                      {shipmentDetail.recipient_address}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Email:</TableCell>
                    <TableCell>{shipmentDetail.shipper_email}</TableCell>

                    <TableCell>{shipmentDetail.recipient_email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Phone:</TableCell>
                    <TableCell>{shipmentDetail.shipper_phone}</TableCell>
                    <TableCell>{shipmentDetail.recipient_phone}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            {/* END PACKAGE DETAILS */}
          </div>

          {/* SHIPMENT TRACKING TIMELINE */}
          <div className="bg-white pt-5 pb-10 px-6 my-4">
            <div className="font-semibold text-lg uppercase mb-3 border-b border-b-primary">
              Shipment Activity
            </div>

            {/* SHIPMENT TIMELINE */}
            <ShipmentTimeline
              shipmentEvents={shipmentDetail.shipment_events.data}
            />
            {/* END SHIPMENT TIMELINE */}
          </div>
          {/* END SHIPMENT TRACKING TIMELINE */}

          {/* COMPLETE SHIPMENT DETAILS (TABLE)*/}
          <div className="bg-white pt-5 pb-10 px-6">
            <div className="font-semibold text-lg uppercase mb-3 border-b border-b-primary">
              Shipment details
            </div>

            <div className="shipment-details text-sm flex flex-wrap">
              <div className="w-1/2">
                <div>Tracking number: </div>
                <div>{shipmentDetail.tracking_number}</div>
              </div>

              <div className="w-1/2">
                <div>Weight: </div>
                <div>{shipmentDetail.weight}</div>
              </div>

              <div className="w-1/2">
                <div>Total pieces: </div>
                <div>{shipmentDetail.contents.data.length}</div>
              </div>

              <div className="w-1/2">
                <div>Special handling: </div>
                <div></div>
              </div>

              <div className="w-1/2">
                <div>Packaging: </div>
                <div></div>
              </div>

              <div className="w-1/2">
                <div>Estimated delivery date: </div>
                <div>{shipmentDetail.estimated_delivery_date}</div>
              </div>

              <div className="w-1/2">
                <div>Shipping date: </div>
                <div>{shipmentDetail.ship_date}</div>
              </div>

              <div className="w-1/2">
                <div>Shipping method: </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* END COMPLETE SHIPMENT DETAILS */}

          {/* COMPLETE SHIPMENT DETAILS (TABLE)*/}
          <div className="bg-white pt-5 pb-10 px-6 mt-4">
            <div className="font-semibold text-lg uppercase mb-3 border-b border-b-primary">
              Shipment Contents
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipmentDetail.contents.data.map((content) => {
                  return (
                    <TableRow key={content.attributes.item_id}>
                      <TableCell>{content.attributes.item_name}</TableCell>
                      <TableCell>
                        {content.attributes.item_description}
                      </TableCell>
                      <TableCell>{content.attributes.item_quantity}</TableCell>
                      <TableCell>{content.attributes.item_value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          {/* END COMPLETE SHIPMENT DETAILS */}
        </div>
      </section>
    </main>
  );
}

const tableColumns = {};
