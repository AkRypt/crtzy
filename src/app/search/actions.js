import { createClient } from "../utils/supabase/client";

export async function getInfluencers() {
    const supabase = createClient();

    const { data, error, status } = await supabase
        .from('influencer')
        .select('*')
    
    if (error) {
        console.error("In search/actions.js, getInfluencers: ", error)
        throw error
    }

    return data
}

export async function filterInfluencers(filters) {
    const supabase = createClient();

    
    let query = supabase
        .from('influencer')
        .select('*')

    for (const [key, value] of Object.entries(filters)) {
        if (value !== null) {
            // Checking if it's an array
            if (Array.isArray(value)) {
                query = query.contains(key, value)
            } else if (key === "followers") {
                // Returning only less than or equal to given number
                query = query.lte(key, value)
            } else if (key === "tags") {
                // Checking if any of the tags exist with the inf
                for (let tag of tags) {
                    query = query.filter(key, 'ilike', `%${tag}%`)
                }
            } else {
                query = query.eq(key, value)
            }
        }
    }

        
    const { data, error, status } = await query

    if (error) {
        console.error("In search/actions.js, filterInfluencers: ", error)
        throw error
    }

    return data
}

