"use client";

import Layout from "@/layouts/Layout";
import Image from "next/image";
import Header from "@/components/pages/profile/Header";

export default function Profile() {
  return (
    <Layout withFooter={false} withNavbar>
      <div className="w-full px-10 md:px-28 py-5 font-manrope text-white">
        <Header />
        <h1 className="text-xl md:text-2xl font-semibold mb-5">
          Profile Picture
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full md:h-[200px] ml-1 mb-24 px-10 pt-5 md:pt-0 rounded-xl border border-[#262626] bg-[#1A1A1A]">
          <Image
            src="/images/profile/streamer1.svg"
            alt="streamer"
            width={100}
            height={100}
            className="w-32 h-32 rounded-full bg-green-400 object-cover"
          />
          <div className="h-full flex flex-col items-center md:items-start gap-5 pb-4">
            <button className="w-44 px-3 py-2 md:mt-12 rounded-3xl text-sm font-medium bg-[#4D4D4D] hover:bg-[#404040]">
              Change Profile Picture
            </button>
            <h3 className="text-sm md:text-base opacity-65">
              Must be JPEG, PNG or GIF and must not exceed 10MB.
            </h3>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold mb-5">
          Profile Settings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-3 ml-1 px-10 py-6 rounded-xl border border-[#262626] bg-[#1A1A1A]">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium">Username</h2>
            <div>
              <input
                type="text"
                className="w-full md:w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
              <h3 className="text-sm md:text-base opacity-65 ml-2 mt-1">
                You can update your username again in 2 weeks
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium">Email</h2>
            <div>
              <input
                type="text"
                className="w-full md:w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium">Bio</h2>
            <div>
              <input
                type="text"
                className="w-full md:w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
            </div>
          </div>
          <div className="hidden md:block relative w-9/12">
            <button className="absolute bottom-7 -right-2 px-4 py-1.5 rounded-lg bg-[#06D001]/80">
              Save Changes
            </button>
          </div>
          <div className="md:hidden flex mt-5">
            <button className="px-4 py-1.5 rounded-lg bg-[#06D001]/80">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
