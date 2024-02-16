import connectMongoDB from "@/libs/dbConnect";
import Works from "@/models/Works";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const topics = await Works.find();
    return NextResponse.json({ topics });
}