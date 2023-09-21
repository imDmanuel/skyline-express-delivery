"use server";

import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { z } from "zod";
import { env } from "./env";
import { ShipmentApiResponse } from "./types";

export const trackPackage = async (formData: FormData) => {
  const schema = z.string({
    required_error: "Tracking ID is required",
  });

  const trackingId = schema.safeParse(formData.get("trackingId"));

  // TODO: CHECK IF TRACKING ID IS VALID FIRST BEFORE REEDIRECTING
  let response;

  try {
    response = await axios.post<ShipmentApiResponse>("/api", {
      url: `${env.NEXT_PUBLIC_API_BASE_URL}/shipments/?filters[tracking_number][$eq]=${trackingId}&populate=*`,
      options: {
        headers: {
          authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_REST_TOKEN}`,
        },
      },
    });

    if (response.data.data.length === 0) {
      throw new Error("Tracking ID not found");
    }
  } catch (e) {
    if (e instanceof Error || e instanceof AxiosError)
      return {
        success: false,
        message: e.message,
      };
  }

  if (trackingId.success) {
    redirect(`/tracking?trackingId=${trackingId.data}`);
  } else {
    throw new Error("Invalid Tracking ID");
  }
};
