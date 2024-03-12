'use client';

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import constants from "../constants";

export default function SignUpForm() {
    const supabase = createClientComponentClient();
    return (
        <Auth 
        supabaseClient={supabase}
        view="sign_up"
        showLinks={false}
        providers={[]}
        redirectTo={constants.BASE_URL + "/auth/callback"}
        appearance={{
            theme: ThemeSupa
        }}
        />
    )
}