"use client"
import Link from "next/link";
import websiteLogo from "../../../public/websiteLogo.png"
import Image from "next/image";

const Navbar = () => {

    // create links array
    const links = [
        {
            title: 'Home',
            path: '/'
        },
    ]


    return (
        <div className="min-h-screen border-r-[1px] border-[#a1a1a1] py-5 px-10 flex justify-between items-start flex-col w-[250px]">
            <div>
                <Link href={"/"}><Image src={websiteLogo} alt="Website logo" className="w-[100px] hover:scale-105 duration-300"></Image></Link>
            </div>
        </div>
    );
};

export default Navbar;