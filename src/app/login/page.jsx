"use client"

import { login, signup } from './actions'
import constants from '../constants'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <h1 className="text-8xl font-serif mb-8 text-black">{constants.APP_NAME}</h1>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
              Email:
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" name="email" type="email" required />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
              Password:
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" name="password" type="password" required />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            formAction={login}>
              Log in
            </button>
            <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline ml-5 focus:outline-none text-white font-bold py-2 px-4 rounded" 
            formAction={signup}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}





// 'use client'

// import AuthForm from "../components/AuthForm";
// import constants from "../constants";
// import { useState } from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useRouter } from "next/navigation";

// export default async function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const router = useRouter();

//   const supabase = createClientComponentClient();

//   const handleSignUp = async () => {
//     await supabase.auth.signUp({
//       email, password,
//       options: {
//         emailRedirectTo: `${location.origin}/auth/callback`
//       }
//     })
//     router.refresh();
//   }

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email, password
//     })
//     router.refresh();
//   }

//   return (
//     <div className="flex items-center justify-center h-screen w-full bg-white">
//       <div className="text-center">
//         <h1 className="text-8xl font-serif mb-8 text-black">crtzy</h1>
//         <AuthForm />
//         <p className="text-sm text-gray-500">
//           Don't have an account? 
//           <a href={constants.BASE_URL + "/sign-up"} className="text-blue-500">Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
