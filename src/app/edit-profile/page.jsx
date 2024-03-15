'use client';

import { Navbar, Loader, CZButton } from "../components";
import { useState } from "react";
import assets from "../../../public/assets";
import { CZInput } from "../../components/ui";

export default function EditProfile() {

    const [loading, setLoading] = useState(false);

    return (
        <main>
            <Navbar />

            {/* Loading */}
            {loading && <Loader />}

            <div className="bg-white rounded-lg mx-[10%] mt-10 justify-center items-center shadow-lg p-6 text-center">
                <h2 className="font-sans text-2xl">Edit your
                <span className="font-serif text-3xl text-orange-600"> crtzy</span> profile</h2>

                <div className="flex md:flex-row justify-center text-left">


                    {/* Left Side */}
                    <div className="flex flex-col mt-6 md:mr-10 items-center">
                        <img src={assets.INF_CARD} className="rounded-full h-48 w-48 object-cover mb-2" />
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
                            <CZInput id={"name"} placeholder={"Name"} className="mb-2" />
                            <label htmlFor="username" className="text-sm font-semibold mb-1">Username</label>
                            <CZInput id={"username"} placeholder={"Username"} className="mb-2" />
                            <label htmlFor="instagram_link" className="text-sm font-semibold mb-1">Instagram Link</label>
                            <CZInput id={"instagram_link"} placeholder={"Instagram Link"} className="mb-2" />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col mt-6 md:mr-10 items-center">
                        <div className="flex flex-col">
                            <label htmlFor="bio" className="text-sm font-semibold mb-1">Bio</label>
                            <textarea id={"bio"} placeholder={"Enter your bio"} 
                            className="px-3 py-2 border rounded-md bg-white bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mb-2" />
                            
                        </div>
                    </div>

                </div>

                <CZButton className="mx-auto mt-4">
                    Save Changes</CZButton>
            </div>
        </main>
    )
}

