import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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
        if (password === existingUser.password) {

            // create token data
            const tokenData = {
                id: existingUser?._id,
                userName: existingUser?.userName,
                email: existingUser?.email,
            }

            // create JSON web token
            const token = await jwt.sign(tokenData, process.env.ACCESS_WEB_TOKEN, { expiresIn: '1h' })

            // send the response to the front end
            const response = NextResponse.json({
                message: 'Sign in successful!',
                success: true
            })
            // set the token to browser cookies
            response.cookies.set("token", token, { httpOnly: true })
            return response;
        }
        else {
            return NextResponse.json({ message: 'Check your email or password!', success: false })
        }
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}