// 'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "../utils/supabase/client"
import { redirect } from "next/navigation";

export async function updateProfile(formData) {

    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();


    try {
        const { error } = await supabase.from('influencer').upsert({
            inf_id: user?.id,
            updated_at: new Date().toISOString(),
            ...formData,
        })
        if (error) console.error("first error", error)
    } catch (error) {
        console.error('Error updating the data!', error)
    } finally {
        return user.id
        // revalidatePath('/')
        // redirect(`/profile?inf_id=${user?.id}`)
    }

}

