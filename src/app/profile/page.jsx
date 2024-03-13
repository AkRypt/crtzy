'use client'

import constants from "../constants";
import Navbar from "../components/Navbar";
import { useParams, useSearchParams } from "next/navigation";

export default async function Profile() {
    const searchParams = useSearchParams();

    
    return (
        <main>
            <Navbar />
            <h1>{searchParams.get('inf_id')}</h1>
        </main>
    )
}
