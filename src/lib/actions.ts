"use server";

import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { z } from "zod";
import { env } from "./env";
import { ShipmentApiResponse } from "./types";

export const trackPackage = async (
  formData: FormData
): Promise<
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    }
  | undefined
> => {
  const schema = z.string({
    required_error: "Tracking ID is required",
  });

  const trackingId = schema.safeParse(formData.get("trackingId"));

  if (!trackingId.success) {
    return { success: false, message: "Invalid Tracking ID" };
  }

  let response;

  try {
    response = await axios.post<ShipmentApiResponse>(
      "http://localhost:3000/api",
      {
        url: `${env.NEXT_PUBLIC_API_BASE_URL}/shipments/?filters[tracking_number][$eq]=${trackingId.data}&populate=*`,
        options: {
          headers: {
            authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_REST_TOKEN}`,
          },
        },
      }
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        success: false,
        message:
          e.response?.data.message ||
          "An error occurred while fetching tracking details",
      };
    }

    if (e instanceof Error) {
      return {
        success: false,
        message:
          e.message || "An error occurred while fetching tracking details",
      };
    }

    return {
      success: false,
      message: "An error occurred while fetching tracking details",
    };
  }

  redirect(`/tracking?trackingId=${trackingId.data}`);
};
