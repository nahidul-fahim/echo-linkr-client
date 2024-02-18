import { Button } from "@/components/ui/button";
import Link from "next/link";


const NotFound = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center gap-5">
            <h2 className="text-xl font-bold text-center text-[red]">Oops! 404</h2>
            <Link href={"/"}><Button variant={"destructive"}>Back to Home</Button></Link>
        </div>
    );
};

export default NotFound;