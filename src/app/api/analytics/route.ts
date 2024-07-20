import analytics from "../../data.json";
import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
  try {
    const data = analytics;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "hi" }, { status: 400 });
  }
};
