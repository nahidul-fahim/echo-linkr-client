'use client'

import { useGlobalAuthContext } from "@/app/(context)/AuthProvider";

const Sidebar = () => {

    // hooks
    const { userData } = useGlobalAuthContext();

    console.log(userData);



    return (
        <div>
            <p>Sidebar data: {userData.name}</p>
        </div>
    );
};

export default Sidebar;