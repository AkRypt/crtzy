
import { createClient } from "../utils/supabase/client";

export async function getInfluencer(inf_id) {
    const supabase = createClient();

    const { data, error, status } = await supabase
        .from('influencer')
        .select('*')
        .eq('inf_id', inf_id)
        .single()
    
    if (error) {
        console.error("In profile/actions.js, getInfluencer: ", error)
        throw error
    }

    return data
}