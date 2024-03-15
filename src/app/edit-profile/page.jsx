'use client';

import { Navbar, Loader, CZButton } from "../components";
import { useState } from "react";
import assets from "../../../public/assets";
import { CZInput } from "../../components/ui";
import constants from "../constants";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
import { updateProfile } from './actions';
import { useRouter } from "next/navigation";

export default function EditProfile() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [bio, setBio] = useState("");
    const [profilePictureURL, setProfilePictureURL] = useState("");
    const [country, setCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [categories, setCategories] = useState([]);
    const [tagInputValue, setTagInputValue] = useState("")
    const [tags, setTags] = useState([]);
    const [selectedGender, setSelectedGender] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [connectInstagram, setConnectInstagram] = useState(false);

    const allCategories = constants.CATEGORIES_LIST
    const countries = constants.COUNTRIES_LIST
    const [states, setStates] = useState([])
    const genders = constants.GENDERS_LIST
    const allLanguages = constants.LANGUAGES_LIST

    const onSelectCountry = (country_id) => {
        const selectedCountry = countries.find(country => country.id === country_id);
        if (selectedCountry && selectedCountry.states) {
            setStates(selectedCountry.states);
        }
        setCountry(selectedCountry.name);
    }

    const handleTagInput = () => {
        if (tagInputValue && !tags.includes(tagInputValue)) {
            setTags([...tags, tagInputValue])
        }
        setTagInputValue("")
    }

    const deleteTag = (tag) => {
        setTags(tags.filter(t => t !== tag))
    }
    const deleteLang = (languageId) => {
        setLanguages(languages.filter(l => l !== languageId))
    }
    const deleteCategory = (category) => {
        setCategories(categories.filter(c => c !== category))
    }

    const handleCategories = (value) => {
        if (value && !categories.includes(value)) {
            setCategories([...categories, value])
        }
    }

    const handleLanguages = (value) => {
        if (value && !languages.includes(value)) {
            setLanguages([...languages, value])
        }
    }

    const onClickSaveChanges = async () => {
        const formData = {
            name: name,
            username: username,
            country: country,
            categories: categories,
            tags: tags,
            profile_picture_url: "https://www.incauthority.com/blog/wp-content/uploads/2023/01/influencer-1024x711.png",
            bio: bio,
            state: selectedState,
            languages: languages,
            gender: selectedGender,
            ig_link: instagramLink,
            followers: 7041
        }
        
        const uid = await updateProfile(formData)
        if (uid) {
            router.push(`/profile?inf_id=${uid}`)
        }
    }

    return (
        <main>
            <Navbar />

            {/* Loading */}
            {loading && <Loader />}

            <div className="bg-white flex flex-col rounded-lg mx-[10%] mt-10 justify-center items-center shadow-lg p-6 text-center">
                <h2 className="font-sans text-2xl">Edit your
                <span className="font-serif text-3xl text-orange-600"> crtzy</span> profile</h2>

                <div className="flex flex-col md:flex-row justify-center md:w-[50%] text-left">
                    {/* Left Side */}
                    <div className="flex flex-col mt-6 md:mr-10 items-center">
                        <img src={assets.INF_CARD} className="rounded-full h-48 w-48 object-cover mb-2" />
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
                            <CZInput id={"name"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} className="mb-2" />
                            <label htmlFor="username" className="text-sm font-semibold mb-1">Username</label>
                            <CZInput id={"username"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Username"} className="mb-2" />
                            <label htmlFor="instagram_link" className="text-sm font-semibold mb-1">Instagram Link</label>
                            <CZInput id={"instagram_link"} value={instagramLink} onChange={(e) => setInstagramLink(e.target.value)} placeholder={"Instagram Link"} className="mb-2" />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col mt-6 w-full ">
                        <label htmlFor="bio" className="text-sm font-semibold mb-1">Bio</label>
                        <textarea id={"bio"} placeholder={"Enter your bio"} onChange={(e) => setBio(e.target.value)}
                        className="px-3 py-2 border rounded-md bg-white bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mb-2" />
                        

                        {/* Category Dropdown */}
                        <div className="mb-2">
                            <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">Categories: (upto 2 max.)</label>
                            <Select disabled={categories.length >= 2} onValueChange={(value) => handleCategories(value)}>
                            <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        allCategories.map((category) => {
                                            return <SelectItem key={category.name} value={category.name}>{category.name}</SelectItem>
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            <div className="flex flex-wrap mt-2">
                                {
                                    categories.map((categoryName) => {
                                        return <span key={categoryName} className="bg-white border border-orange-500 text-sm text-black px-2 py-1 rounded-full mr-1 mb-2">
                                            {categoryName}
                                            <button className="ml-2 text-red-500 focus:outline-none" onClick={() => deleteCategory(categoryName)}>x</button>
                                        </span>
                                    })
                                }
                            </div>
                        </div>

                        {/* Country */}
                        <div className="mb-2">
                            <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">Country</label>
                            <Select className="mb-4" onValueChange={(value) => onSelectCountry(value)}>
                            <SelectTrigger className="bg-white">
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

                        {/* State */}
                        {
                            states.length > 0 ?
                            <div className="mb-2">
                                <label htmlFor="followerCnt" className="text-sm font-semibold mb-4">State</label>
                                <Select onValueChange={(value) => setSelectedState(value)}>
                                <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select a State" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            states.map((state) => {
                                                return <SelectItem key={state.name} value={state.name}>{state.name}</SelectItem>
                                            })
                                        }
                                    </SelectGroup>
                                </SelectContent>
                                </Select>
                            </div> : null
                        }

                        {/* Content Languages */}
                        <div className="mb-2">
                            <label htmlFor="followerCnt" className="text-sm font-semibold">Languages: (upto 3 max.)</label>
                            <Select disabled={languages.length >= 3} className="mb-4" onValueChange={(value) => handleLanguages(value)}>
                                <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select Languages" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            allLanguages.map((language) => {
                                                return <SelectItem key={language.name} value={language.name}>{language.name}</SelectItem>
                                            })
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="flex flex-wrap mt-2">
                                {
                                    languages.map((languageName) => {
                                        const selectedLanguage = allLanguages.find(lang => lang.name === languageName);
                                        return <span key={languageName} className="bg-white border border-orange-500 text-sm text-black px-2 py-1 rounded-full mr-1 mb-2">
                                            {selectedLanguage.name}
                                            <button className="ml-2 text-red-500 focus:outline-none" onClick={() => deleteLang(languageName)}>x</button>
                                        </span>
                                    })
                                }
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="mb-2">
                            <label htmlFor="gender" className="text-sm font-semibold">Gender</label>
                            <Select className="mb-4" onValueChange={(value) => setSelectedGender(value)}>
                                <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            genders.map((gender) => {
                                                return <SelectItem key={gender.id} value={gender.id}>{gender.name}</SelectItem>
                                            })
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="flex flex-wrap mt-2">
                                {selectedGender && 
                                <span key={selectedGender} className="bg-white border border-orange-500 text-sm text-black px-2 py-1 rounded-full mr-1 mb-2">
                                    {genders.find(gender => gender.id === selectedGender).name}
                                    <button className="ml-2 text-red-500 focus:outline-none" onClick={() => setGender(null)}>x</button>
                                </span>}
                            </div>
                        </div>

                        {/* <!-- Tags --> */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold mb-2">Tags: (upto 6 max.)</h3>
                            <div className="flex items-center">
                                <form action={handleTagInput}>
                                    <input
                                        className={`px-3 py-2 border rounded-md w-[80%] bg-white bg-input text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                                        type="text"
                                        placeholder={"Enter Tags"}
                                        value={tagInputValue}
                                        onChange={(e) => setTagInputValue(e.target.value)}
                                        disabled={tags.length >= 6}
                                        />
                                    <button type="submit" className="bg-white rounded-full p-1 ml-2 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={3} fill="none" stroke="orange" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-wrap mt-2">
                                {
                                    tags.map((tag) => {
                                        return <span key={tag} className="bg-white border border-orange-500 text-sm text-black px-2 py-1 rounded-full mr-1 mb-2">
                                            {tag}
                                            <button className="ml-2 text-red-500 focus:outline-none" onClick={() => deleteTag(tag)}>x</button>
                                        </span>
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>

                <CZButton className="mx-auto mt-4"
                onClick={onClickSaveChanges}>
                    Save Changes</CZButton>
            </div>
        </main>
    )
}

