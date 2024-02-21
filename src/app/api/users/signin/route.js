import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";

// connect to the database
connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("Sign in data from client side", reqBody);
        const { email, password } = reqBody;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({ error: "User doesn't exist" }, { status: 401 })
        }

        console.log("Sign in user exists:", true);
        console.log("existing user", existingUser);
        if (password === existingUser.password) {
            return NextResponse.json({ message: 'Sign in successful!', success: true })
        }
        else {
            return NextResponse.json({ message: 'Check your email or password!', success: false })
        }

    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}