import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import constants from "../constants";
import LogoutOrLogin from "../components/LogoutOrLogin";
import Navbar from "../components/Navbar";

export default async function Community() {
    const supabase = createClientComponentClient();

    return (
        <main>
            <Navbar />
        </main>
    )
}
