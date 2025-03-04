"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[70vh] text-white">
          <div className="text-3xl sm:text-7xl font-semibold mb-4 text-center">
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent "
              style={{ WebkitBackgroundClip: "text" }}
            >
              Frame Your Social Space
            </span>
          </div>
          <div className="text-sm sm:text-xl opacity-75 text-center mt-7">
            Forge lasting connections and share moments effortlessly with
            FriendsBook, your gateway to seamless social networking.
            <br /> Connect, engage, and experience the joy of staying close to
            what matters most. Elevate your social journey today! learning
            experience today
          </div>
          <div className="mt-10 text-center">
            {userId ? (
               <Link href="/Feed">
              <button className="bg-white  text-black font-semibold py-4 px-10 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out mr-5 my-5 ">
               Feed 
              </button>
              </Link>
            ) : (
             ""
            )}
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
