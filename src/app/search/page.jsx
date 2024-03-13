"use client"

import { useState } from "react";
import constants from "../constants";
import Navbar from "../components/Navbar";
 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
import { Slider } from "../../components/ui/slider"
import { CZInput} from '../../components/ui'
import assets from "../../../public/assets";
import Link from "next/link";

export default function Search() {

    // -- Filters --
    // Category of content --
    // Country --
    // City --
    // Follower count --
    // Tags
    // Content Languages
    // Gender
    // Age (Optional)
    // Social Media Apps (Later)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)
    const [followerCnt, setFollowerCnt] = useState([5000]);
    const [tags, setTags] = useState(["dance", "indian", "atlanta"])
    const [languages, setLanguages] = useState([])
    const [selectedGender, setGender] = useState(null)

    const categories = [
        { id: 1, name: "Dance" },
        { id: 2, name: "Singing" },
        { id: 3, name: "Makeup" },
        { id: 4, name: "Travel" },
    ]
    const countries = [
        { id: 1, name: "India" },
        { id: 2, name: "USA" },
        { id: 3, name: "UK" },
        { id: 4, name: "Australia" },
    ]
    const cities = [
        { id: 1, name: "Mumbai" },
        { id: 2, name: "Delhi" },
        { id: 3, name: "Bangalore" },
    ]
    const allLanguages = [
        { id: 1, name: "English" },
        { id: 2, name: "Hindi" },
        { id: 3, name: "Spanish" },
        { id: 4, name: "French" },
    ]
    const genders = ["Male", "Female", "Other"]


    const influencers = [
        { 
            id: 1, 
            name: "Jane Doe", 
            username: "janexx12",
            image: assets.INF_CARD,
            categories: ["Dance", "Fitness"], 
            socials: ["instagram", "twitter", "tiktok"],
            country: "USA",
            city: "Atlanta",
            followers: 10000,
            tags: ["dance", "indian", "atlanta"],
            languages: ["english", "hindi"],
            gender: "Female",
        },
        { 
            id: 2, 
            name: "John Doe", 
            username: "johnxx12", 
            image: assets.INF_CARD,
            categories: ["Workout", "Fitness"], 
            socials: ["instagram", "twitter", "tiktok"],
            country: "USA",
            city: "NYC",
            followers: 20000,
            tags: ["dance", "fitness", "nyc"],
            languages: ["english", "hindi"],
            gender: "Male",
        },
    ]
    
    return (
        <main>
            <Navbar />
            <div className="flex flex-col md:flex-row mx-auto px-10">
                {/* Filter Section */}
                <div className="p-4 md:w-1/4 bg-gradient-to-r from-orange-200 to-orange-300">
                    <h2 className="text-lg font-bold mb-4">Filter</h2>
                    
                    {/* Category Dropdown */}
                    <div className="mb-2">
                        <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">Category</label>
                        <Select onValueChange={(value) => setSelectedCategory(value)}>
                        <SelectTrigger className="w-[90%]">
                            <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    categories.map((category) => {
                                        return <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>

                    {/* Country */}
                    <div className="mb-2">
                        <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">Country</label>
                        <Select className="mb-4" onValueChange={(value) => setSelectedCountry(value)}>
                        <SelectTrigger className="w-[90%]">
                            <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    countries.map((country) => {
                                        return <SelectItem key={country.id} value={country.id}>{country.name}</SelectItem>
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>

                    {/* City */}
                    <div className="mb-2">
                        <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">City</label>
                        <Select onValueChange={(value) => setSelectedCity(value)}>
                        <SelectTrigger className="w-[90%]">
                            <SelectValue placeholder="Select a City" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    cities.map((city) => {
                                        return <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>


                    {/* Followers range */}
                    <div className="mb-4">
                        <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">Follower Range</label>
                        <p>&lt;{followerCnt}</p>
                        <Slider
                            id="followerCnt"
                            defaultValue={followerCnt}
                            className="mt-2 bg-orange w-[90%]"
                            max={100000}
                            step={1000}
                            onValueChange={(value) => {setFollowerCnt(value)}}
                        />
                    </div>

                    {/* <!-- Tags --> */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2">Tags</h3>
                        <CZInput placeholder={"Enter Tags"}  />
                        <div className="flex flex-wrap mt-2">
                            {
                                tags.map((tag) => {
                                    return <span key={tag} className="bg-white border border-orange-500 text-black px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                                })
                            }
                        </div>
                    </div>

                    {/* Content Languages */}
                    <div className="mb-2">
                        <label htmlFor="followerCnt" className="text-sm font-semibold">Languages</label>
                        <Select className="mb-4" onValueChange={(value) => setLanguages([...languages, value])}>
                            <SelectTrigger className="w-[90%]">
                                <SelectValue placeholder="Select Languages" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        allLanguages.map((language) => {
                                            return <SelectItem key={language.id} value={language.id}>{language.name}</SelectItem>
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="flex flex-wrap mt-2">
                            {
                                languages.map((languageId) => {
                                    const selectedLanguage = allLanguages.find(lang => lang.id === languageId);
                                    return <span key={languageId} className="bg-white border border-orange-500 text-black px-2 py-1 rounded-full mr-2 mb-2">{selectedLanguage.name}</span>
                                })
                            }
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="mb-2">
                        <label htmlFor="gender" className="text-sm font-semibold">Gender</label>
                        <Select className="mb-4" onValueChange={(value) => setGender(value)}>
                            <SelectTrigger className="w-[90%]">
                                <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        genders.map((gender) => {
                                            return <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="flex flex-wrap mt-2">
                            {selectedGender && <span key={selectedGender} className="bg-white border border-orange-500 text-black px-2 py-1 rounded-full mr-2 mb-2">{selectedGender}</span>}
                        </div>
                    </div>
                </div>

                {/* Right Side */}


                {/* <!-- Influencer Cards --> */}
                <div className="p-4 md:w-3/4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Search Results</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {   // Influencer Card 1
                            influencers.map((influencer) => {
                                return <Link href={{
                                            pathname: '/profile',
                                            query: {
                                                inf_id: influencer.id
                                            }
                                        }}>
                                            <div 
                                            className="bg-white shadow-md rounded-lg overflow-hidden w-80 hover:shadow-lg cursor-pointer">
                                                <img src={influencer.image} alt="Influencer 1" className="w-full" />
                                                <div className="p-3">
                                                    <div className="flex">
                                                        <h3 className="text-lg font-semibold">{influencer.name} <span className="text-sm font-normal">(@{influencer.username})</span></h3>
                                                        <div className="flex ml-4 mt-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#494949" className="w-5 h-5">
                                                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                                            </svg>
                                                            <p className="text-gray-800 ml-1">
                                                                {influencer.followers}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                    {
                                                        influencer.categories.map((category) => {
                                                            return <span key={category} className="bg-white border border-orange-500 text-black rounded-full px-2 mr-1">{category}</span>
                                                        })
                                                    }
                                                    </div>
                                                    <div className="flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-4 h-5">
                                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                        </svg>
                                                        <p className="text-gray-800 ml-1">
                                                            {influencer.city}, {influencer.country}
                                                        </p>
                                                    </div>
                                                    <div className="flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                                            <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clipRule="evenodd" />
                                                        </svg>
                                                        <p className="text-gray-800 ml-1">
                                                            {influencer.languages.join(', ')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
