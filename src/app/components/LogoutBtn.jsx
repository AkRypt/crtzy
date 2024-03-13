'use client';

import { logout } from "../logout/actions";

export default function LogoutBtn() {
    return (
        <button onClick={() => logout()}
        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            Logout
        </button>
    )
}