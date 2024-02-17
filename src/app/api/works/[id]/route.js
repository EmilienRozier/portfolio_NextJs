import connectMongoDB from "@/libs/dbConnect";
import Works from "@/models/Works";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newYear: year, newTechno: techno } = await request.json();
    await connectMongoDB();
    await Works.findByIdAndUpdate(id, { title, year, techno });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const works = await Works.findOne({ _id: id });
    return NextResponse.json({ works }, { status: 200 });
}