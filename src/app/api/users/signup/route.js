import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// connect function invoking to connect with database
connect();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("Data from request body", reqBody);
        const { name, email, password, userName, userImage } = reqBody;

        // check if user already exists in the database
        const existingUser = await User.findOne({ email });

        // if user already exists in the database, send an error message
        if (existingUser) {
            console.log("User already exists in the database pe po pe po")
            return NextResponse.json({
                status: 400,
                message: 'User already exists',
            })
        }


        // encrypted password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)


        // if existingUser is false, save the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            userName,
            userImage
        })

        console.log("New user info here before database:", newUser)

        const savedUser = await newUser.save()
        console.log("Saved user data:", savedUser)

        return NextResponse.json({
            message: 'User created successfully!',
            success: true,
            savedUser
        })
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}