
import { logout } from "../logout/actions";

export default function LogoutBtn() {
    return (
        <button onClick={() => logout()}
        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-xs px-3 py-1 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-500">
            Logout
        </button>
    )
}