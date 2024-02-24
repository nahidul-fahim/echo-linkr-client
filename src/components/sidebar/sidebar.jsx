'use client'

import { useSession } from "next-auth/react";

const Sidebar = () => {

    // hooks
    const { data: userData } = useSession();

    console.log(userData);



    return (
        <div>
            <p>Sidebar data</p>
        </div>
    );
};

export default Sidebar;