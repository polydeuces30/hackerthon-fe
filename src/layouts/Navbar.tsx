"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]";
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center w-full h-24 py-2 px-16 bg-transparent font-manrope">
        <Image
          src="/images/footer/logo.svg"
          alt="Floo"
          width={100}
          height={100}
          className="w-36"
        />
        <div className="flex items-center p-2 gap-3 rounded-lg bg-[#0F0F0F]">
          <Link className={`px-4 py-2 rounded-lg ${isActive("/")}`} href="/">
            Home
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg ${isActive("/channels")}`}
            href="/channels"
          >
            Live Channels
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg ${isActive("/support")}`}
            href="/support"
          >
            Support
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg ${isActive("/subscription")}`}
            href="/subscription"
          >
            Subscriptions
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {isLogin ? (
            <>
              <button>
                <Image
                  src="/images/navbar/search.svg"
                  alt="Search"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </button>
              <button>
                <Image
                  src="/images/navbar/notification.svg"
                  alt="Notification"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </button>
              <button>
                <Image
                  src="/images/navbar/profile.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
