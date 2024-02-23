import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful!",
            success: true,
        })
        // clear the token from cookies to log out the user
        response.cookies.set("token", '', { httpOnly: true })
        return response;
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}