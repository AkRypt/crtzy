'use client';

import Link from "next/link";
import { createClient } from "../utils/supabase/client";
import LogoutBtn from "./LogoutBtn";
import { useEffect, useState } from "react";

export default function LogoutOrLogin() {
    const [userPresent, setUserPresent] = useState(false);

    useEffect(() => {
        const checkUser = async () => {   
            const supabase = createClient();
            const {data: { user }} = await supabase.auth.getUser();

            if (user) setUserPresent(true);
        }

        checkUser();
    }, []);


    return (
        <div>
            {   userPresent ?
                <div>
                    <LogoutBtn />
                </div>:
                <div>
                    <Link className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-500" 
                    href={{pathname: '/login'}}>Login</Link>
                </div>
            }
        </div>
    )
}

