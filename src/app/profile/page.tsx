"use client";

import Layout from "@/layouts/Layout";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Profile() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path
      ? "bg-gradient-to-r from-[#06D001] to-[#FFFF0C] bg-clip-text text-transparent"
      : "";
  return (
    <Layout withFooter={false} withNavbar>
      <div className="w-full px-28 pt-5 font-manrope text-white">
        <div className="flex gap-16 mb-10">
          <Link
            href="/profile"
            className={`text-3xl font-semibold ${isActive("/profile")}`}
          >
            About
          </Link>
          <Link
            href="/profile/channel"
            className={`text-3xl font-semibold ${isActive("/profile/channel")}`}
          >
            Channel
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-5">Profile Picture</h1>
        <div className="flex items-center gap-5 w-full h-[200px] ml-1 mb-24 px-10 rounded-xl border border-[#262626] bg-[#1A1A1A]">
          <Image
            src="/images/profile/streamer1.svg"
            alt="streamer"
            width={100}
            height={100}
            className="w-32 h-32 rounded-full bg-green-400 object-cover"
          />
          <div className="h-full flex flex-col gap-5">
            <button className="w-44 px-3 py-2 mt-12 rounded-3xl text-sm font-medium bg-[#4D4D4D] hover:bg-[#404040]">
              Change Profile Picture
            </button>
            <h3 className="opacity-65">
              Must be JPEG, PNG or GIF and must not exceed 10MB.
            </h3>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-5">Profile Settings</h1>
        <div className="grid grid-cols-2 w-full h-[340px] ml-1 py-6 rounded-xl border border-[#262626] bg-[#1A1A1A]">
          <div className="flex flex-col gap-3 pl-10">
            <h2 className="text-xl font-medium">Username</h2>
            <div>
              <input
                type="text"
                className="w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
              <h3 className="opacity-65 ml-2 mt-1">
                You can update your username again in 2 weeks
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-10">
            <h2 className="text-xl font-medium">Email</h2>
            <div>
              <input
                type="text"
                className="w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-10">
            <h2 className="text-xl font-medium">Bio</h2>
            <div>
              <input
                type="text"
                className="w-9/12 px-3 py-2 rounded-3xl bg-[#4D4D4D] focus:outline-none"
              />
            </div>
          </div>
          <div className="relative w-9/12">
            <button className="absolute bottom-7 -right-2 px-4 py-1.5 rounded-lg bg-[#06D001]/80">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
