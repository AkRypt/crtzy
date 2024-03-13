import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import constants from "../constants";
import LogoutOrLogin from "../components/LogoutOrLogin";
import Navbar from "../components/Navbar";

export default async function Explore() {
    const supabase = createClientComponentClient();

    return (
        <div className="bg-white">
            <Navbar />
            <h1>Explore page</h1>
            
        </div>
    )
}
