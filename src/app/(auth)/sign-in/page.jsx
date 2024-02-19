"use client"

import { usePathname, useRouter } from "next/navigation";


const SignIn = () => {

    const pathName = usePathname();
    const router = useRouter();
    console.log(router)


    return (
        <div>
            <h2>Sign In page</h2>
        </div>
    );
};

export default SignIn;