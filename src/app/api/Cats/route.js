import catModel from "@/models/Cat";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cats = await catModel.find();

    return NextResponse.json({ cats }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  // console.log("req", req);
  try {
    const body = await req.json();
    console.log("body", body);

    await catModel.create(body);

    // // const newCat = new CatsModel({ name: "fluffy" });
    // // newCat.save();
  } catch (err) {}
}
