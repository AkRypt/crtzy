import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import constants from "../constants";
import Navbar from "../components/Navbar";

export default async function Dashboard() {
    const supabase = createClientComponentClient();

    return (
        <main>
            <Navbar />
        </main>
    )
}
