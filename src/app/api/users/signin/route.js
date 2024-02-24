import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// connect to the database
connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("Sign in data from client side", reqBody);
        const { email, password } = reqBody;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })
        }

        console.log("use exists:", existingUser);


        // check encrypted valid password
        const validPassword = await bcryptjs.compare(password, existingUser.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }



        // get the necessary existing user data
        const userData = {
            email: existingUser.email,
            id: existingUser._id,
            name: existingUser.name,
            image: existingUser.userImage,
            userName: existingUser.userName
        }


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
                success: true,
                userData,
            })
            // set the token to browser cookies
            response.cookies.set("token", token, { httpOnly: true })
            return response;
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}