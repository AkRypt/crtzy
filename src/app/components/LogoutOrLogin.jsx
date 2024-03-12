import Link from "next/link";
import { createClient } from "../utils/supabase/server";
import LogoutBtn from "./LogoutBtn";

export default async function LogoutOrLogin() {
  
    const supabase = createClient();
    const {data} = await supabase.auth.getUser();
    console.log(data.user)
    
    if (data.user) {
        return (
            <div>
                <LogoutBtn />
            </div>
        )
    }

    return (
        <div>
            <Link className="text-blue-500" href="/login">Login</Link>
        </div>
    )
}

