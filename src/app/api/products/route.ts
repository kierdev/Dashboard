import dbConnect from "@/lib/database";
import Product from "@/models/product";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    await dbConnect();
    console.log(body);

    await Product.create(body);
    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();

    const params = request.nextUrl.searchParams.get("id");

    if (!params) {
      const products = await Product.find({});
      return NextResponse.json({ products }, { status: 201 });
    } else {
      const products = await Product.findById(params);
      return NextResponse.json({ products }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const id = body.id;
    await dbConnect();
    const product = await Product.findByIdAndDelete(id);
    return NextResponse.json(
      { message: `Successfully deleted product ${product}` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
export const PUT = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();
    const id = body.id;

    const product = await Product.findByIdAndUpdate(id, body);
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
