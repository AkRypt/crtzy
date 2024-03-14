// 'use server';

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

    console.log(data)
    return data
}