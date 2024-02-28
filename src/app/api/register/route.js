import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/libs/dbConnect";
import User from "@/models/AdminUser";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const user = await User.findOne({ email }).select('_id')

        if (user) {
            console.log('already exist : ', user)
            return NextResponse.json(
                { message: "User already exist." },
                { status: 502 }
            );
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await connectMongoDB();
            await User.create({ email, password: hashedPassword });
        }
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}