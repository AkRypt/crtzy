
import Link from "next/link";
import { createClient } from "../utils/supabase/server";
import LogoutBtn from "./LogoutBtn";

export default async function LogoutOrLogin() {
  
    const supabase = createClient();
    const {data} = await supabase.auth.getUser();
    
    if (data.user) {
        return (
            <div>
                <LogoutBtn />
            </div>
        )
    }

    return (
        <div>
            <Link className="px-4 py-2 bg-ornage-900 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2" 
            href="/login">Login</Link>
        </div>
    )
}

