'use client';

import constants from "../constants";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";
import assets from "../../../public/assets";
import { getInfluencer } from "./actions";
import { useEffect, useState } from "react";

export default function Profile() {
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(true)
    const [influencer, setInfluencer] = useState(null)

    const getInf = async () => {
        setInfluencer(await getInfluencer(searchParams.get('inf_id')));
        setLoading(false)
    }

    useEffect(() => {
        getInf();
    }, [])

    
    return (
        <main>
            <Navbar />

            {/* Loading animation */}
            {loading && (
                <div class="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center h-screen">
                    <div class="relative inline-flex">
                        <div class="w-8 h-8 bg-orange-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                        <div class="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                    </div>
                </div>
            )}

            {/* Profile Section */}
            {
                influencer ?
                <div className="flex flex-col md:flex-row justify-center my-4 mx-2 md:mx-[10%] shadow-md bg-white rounded-lg p-8">
                    {/* Left Side */}
                    <div className="mb-2 justify-center md:mr-10">
                        <img src={influencer.profile_picture_url} alt={influencer.name} 
                        className="rounded-full h-48 w-48 object-cover mb-2" />
                        <h1 className="text-2xl font-bold">{influencer.name}</h1>
                        <p className="text-gray-500">{influencer.username}</p>
                        <a href={influencer.instagram_link} target="_blank" 
                        className="text-blue-500 text-sm hover:underline">{influencer.ig_link}</a>
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2">

                        {/* Categories */}
                        <label htmlFor="categories" className="text-sm font-semibold mb-4">Categories:</label>
                        <div id="categories" className="mb-4">
                            {
                                influencer.categories.map((category) => (
                                    <span key={category} className="bg-orange-300 rounded-full text-sm py-0.5 px-2 mr-1">{category}</span>
                                ))
                            }
                        </div>

                        {/* Bio */}
                        <label htmlFor="bio" className="text-sm font-semibold mb-4">Bio:</label>
                        <p id="bio" className="text-sm mb-4">{influencer.bio}</p>

                        {/* Location */}
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-4 h-5">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-800 ml-1 text-sm">
                                {influencer.state} - {influencer.country}
                            </p>
                        </div>

                        {/* Languages */}
                        <div className="flex mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-800 ml-1 text-sm">
                                {influencer.languages.join(', ')}
                            </p>
                        </div>

                        {/* Tags */}
                        <label htmlFor="tags" className="text-sm font-semibold">Tags:</label>
                        <div id="tags" className="mb-4">
                            {
                                influencer.tags.map((tag, index) => (
                                    <span key={index} className="bg-orange-300 rounded-full text-sm py-0.5 px-2 mr-1">{tag}</span>
                                    ))
                                }
                        </div>

                        {/* Social Media */}
                        {/* <div>
                            <label htmlFor="socialApps" className="text-sm font-semibold">Social Apps:</label>
                            <div id="socialApps" className="flex">
                                {
                                    influencer.social_media.map((app, index) => (
                                        <span key={index} className="bg-orange-300 rounded-full text-sm py-0.5 px-2 mr-1">{app}</span>
                                        ))
                                    }
                            </div>
                        </div> */}
                    </div>
                </div> : null
            }
        </main>
    )
}
