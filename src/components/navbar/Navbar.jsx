"use client"
import Link from "next/link";
import websiteLogo from "../../../public/websiteLogo.png"
import Image from "next/image";
import { Home, LogOut, Search, Videotape } from "lucide-react";
import NavLink from "./Navlink";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import axios from 'axios';
import { toast } from "sonner"
import { signOut } from "next-auth/react";


const Navbar = () => {

    // create links array
    const links = [
        {
            title: <p className="inline-links"><Home /> Home </p>,
            path: '/'
        },
        {
            title: <p className="inline-links"><Videotape /> Reels </p>,
            path: '/reels'
        },
        {
            title: <p className="inline-links"><Search /> Search </p>,
            path: '/search'
        },
    ]

    // get the pathname
    const pathName = usePathname();


    // sign out the user
    const handleSignOut = async () => {
        await axios.get("/api/users/signout")
            .then(res => {
                if (res.data.success) {
                    toast(res.data.message)
                }
            })
            .catch(err => toast(err.code))
    }



    // showing navbar conditionally except sign in and sign up page
    if (pathName === "/sign-in" || pathName === "/sign-up") {
        return null;
    }
    else {
        return (
            <div className="min-h-screen border-r-[1px] border-[#a1a1a1] py-5 px-10 flex justify-between items-start flex-col w-[250px]">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Link href={"/"}><Image src={websiteLogo} priority alt="Website logo" className="w-[100px] hover:scale-105 duration-300"></Image></Link>
                    {
                        links.map(link => <NavLink key={link.title} item={link} />)
                    }
                </div>

                {/* sign out button */}
                <div>
                    <Button onClick={() => signOut()}
                        className="flex justify-center items-center gap-2" variant="default">Sign out <LogOut size={20} />
                    </Button>
                </div>
            </div>
        );
    }

};

export default Navbar;