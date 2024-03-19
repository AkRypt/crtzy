'use client';

import Link from "next/link";
import { createClient } from "../utils/supabase/client";
import LogoutBtn from "./LogoutBtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileBtn() {
    const router = useRouter();

    const [userPresent, setUserPresent] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const checkUser = async () => {   
            const supabase = createClient();
            const {data: { user }} = await supabase.auth.getUser();

            if (user) {
                setUserPresent(true);
                setUserId(user.id);
            }
        }

        checkUser();
    }, []);

    const onClickUser = () => {
        if (userId) {
            router.push(`/profile?inf_id=${userId}`);
        }
    }

    return (
        <div>
            {   userPresent ?
                <div>
                    <button onClick={onClickUser} className="flex items-center justify-center w-8 h-8 mr-2 bg-white-200 border border-orange-500 rounded-full hover:bg-orange-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={2} stroke="orange" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                </div>: null
            }
        </div>
    )
}

