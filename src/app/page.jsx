'use client';

import { useRouter } from "next/navigation";
import AuthForm from "./components/AuthForm";
import { NextResponse } from "next/server";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-serif mb-8 text-black">crtzy</h1>
        <h2 className="text-black text-4xl font-serif">Landing Page</h2>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => router.push('/login')} >
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
