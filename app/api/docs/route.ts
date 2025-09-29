import { NextResponse } from "next/server";
import { getApiDocs } from "@/configs/swagger/config";

export function GET() {
  return NextResponse.json(getApiDocs());
}
