import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import constants from "../constants";
import LogoutOrLogin from "../components/LogoutOrLogin";

export default async function Dashboard() {
    const supabase = createClientComponentClient();

    return (
        <div>
        <h1>DAsHBOARD</h1>
        <LogoutOrLogin />
        {/* <form action="/auth/signout" method="post">
            <button type="submit"
            className="bg-gray-600 font-bold py-2 px-2 rounded-lg">
                Sign Out
            </button>
        </form> */}
        </div>
    )
}
