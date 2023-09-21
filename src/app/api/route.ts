import { NextResponse } from "next/server";
import axios from "axios";
import { env } from "@/lib/env";

export async function POST(request: Request) {
  const reqBody = await request.json();

  let response = null;
  try {
    response = await axios.get(reqBody.url, reqBody.options);
  } catch (e) {
    console.log("error");
    return NextResponse.json({
      message: "An error occured while fetching data",
    });
  }

  return NextResponse.json(response.data);
}
