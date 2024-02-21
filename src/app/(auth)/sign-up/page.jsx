"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";


const SignUp = () => {

    // hooks
    const router = useRouter();



    return (
        <div className="container mx-auto p-5 flex flex-col justify-center items-center min-h-screen relative">

            <Link href={"/"} className="absolute top-8 left-8 font-medium hover:font-semibold duration-300">Back to Home</Link>

            <div className="w-[40%] border-[1px] border-border flex flex-col justify-center items-center gap-8 py-14 rounded-[20px] shadow-border">
                <h1 className="text-2xl font-semibold text-foreground">Unlock a World of Connections!</h1>

                {/* registration form */}
                <form className="w-full flex flex-col justify-center items-center gap-5">
                    {/* Full name */}
                    <input type="text" name="name" id="name" placeholder="Full name" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Email */}
                    <input type="email" name="email" id="email" placeholder="Email address" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Username */}
                    <input type="text" name="userName" id="userName" placeholder="User name" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Password */}
                    <input type="password" name="password" id="password" placeholder="Password" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Submit button */}
                    <input type="submit" value={"Sign Up"} className="bg-foreground text-background font-medium hover:bg-background hover:text-foreground duration-500 border-[1px] border-transparent px-4 py-2 rounded focus:outline-none hover:border-lightBlack cursor-pointer w-2/3" />
                </form>

                <div className="flex justify-center items-center gap-2 text-lightBlack">
                    <p>Already have an account?</p>
                    <Link href={"/sign-in"} className="hover:text-foreground font-medium hover:font-semibold duration-500">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;