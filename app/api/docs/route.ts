import { getApiDocs } from "@/configs/swagger/config";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getApiDocs());
}
