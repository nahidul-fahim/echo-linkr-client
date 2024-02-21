import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";

// connect function invoking to connect with database
connect();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("Data from request body", reqBody);
        const { name, email, password, userName } = reqBody;

        // check if user already exists in the database
        const existingUser = await User.findOne({ email });

        console.log("User already exists in the database pe po pe po", existingUser)

        // if user already exists in the database, send an error message
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 })
        }

        // const savedUser = await User.create(reqBody)

        // if existingUser is false, save the new user
        const newUser = new User({
            name,
            email,
            password,
            userName
        })

        const savedUser = await newUser.save()
        console.log("New saved user:", savedUser);

        return NextResponse.json({
            message: 'User created successfully!',
            success: true,
            savedUser
        })
    }
    catch (error) {
        return NextResponse.json({ error: (error.message, "there was mistake vai") }, { status: 500 })
    }
}