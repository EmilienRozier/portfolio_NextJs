import connectMongoDB from "@/libs/dbConnect";
import Works from "@/models/Works";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, year, techno } = await request.json();
    await connectMongoDB();
    await Works.create({ title, year, techno });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const works = await Works.find();
    return NextResponse.json({ works });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Works.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}