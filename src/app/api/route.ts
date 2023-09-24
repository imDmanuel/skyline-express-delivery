import { NextResponse } from "next/server";
import axios from "axios";
import { env } from "@/lib/env";
import { ShipmentApiResponse } from "@/lib/types";

export async function POST(request: Request) {
  const reqBody = await request.json();

  let response = null;
  try {
    response = await axios.get<ShipmentApiResponse>(
      reqBody.url,
      reqBody.options
    );

    if (response.data.data.length === 0) {
      return NextResponse.json(
        {
          message: "Tracking ID not found",
        },
        { status: 404 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "An error occured while fetching data",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(response.data);
}
