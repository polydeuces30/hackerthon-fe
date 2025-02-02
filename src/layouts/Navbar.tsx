"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "/public/images/navbar/search.svg";
import Notification from "/public/images/navbar/notification.svg";
import Profile from "/public/images/navbar/profile.svg";
import Hamburger from "/public/images/navbar/hamburger-menu.svg";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "bg-[#1A1A1A]" : "text-[#BFBFBF]";

  const isLanding = (path: string) => (pathname === path ? "absolute" : "");

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav
      className={`${isLanding("/")} flex justify-between items-center w-full h-24 py-2 px-8 md:text-sm lg:text-base lg:px-16 bg-transparent font-manrope`}
    >
      <Image
        src="/images/footer/logo.svg"
        alt="Floo"
        width={100}
        height={100}
        className="w-24 lg:w-36"
      />
      <div className="hidden md:flex items-center p-2 lg:gap-3 rounded-lg bg-[#0F0F0F]">
        <Link className={`px-4 py-2 rounded-lg ${isActive("/")}`} href="/">
          Home
        </Link>
        <Link
          className={`px-4 py-2 rounded-lg ${isActive("/directory")}`}
          href="/directory"
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
      <div className="hidden md:flex items-center gap-2 lg:gap-5">
        {isLogin ? (
          <>
            <button>
              <Image
                src={Search}
                alt="Search"
                width={100}
                height={100}
                className="w-7"
              />
            </button>
            <button>
              <Image
                src={Notification}
                alt="Notification"
                width={100}
                height={100}
                className="w-7"
              />
            </button>
            <button>
              <Image
                src={Profile}
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
              className="md:px-3 lg:px-4 py-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="md:px-3 lg:px-4 py-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden">
        <button onClick={toggleMobileNav}>
          <Image
            src={Hamburger}
            alt="hamburger"
            width={32}
            height={32}
            className="w-8 h-auto cursor-pointer filter-white"
          />
        </button>
      </div>
      {/* Mobile Navbar */}
      {isMobileNavOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-[#0F0F0F] flex flex-col items-center py-4">
          <Link className={`px-4 py-2 rounded-lg ${isActive("/")}`} href="/">
            Home
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg ${isActive("/directory")}`}
            href="/directory"
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
          {isLogin ? (
            <>
              <button>
                <Image
                  src={Search}
                  alt="Search"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </button>
              <button>
                <Image
                  src={Notification}
                  alt="Notification"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </button>
              <button>
                <Image
                  src={Profile}
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
                className="w-24 text-center py-2 mb-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="w-24 text-center py-2 rounded-lg bg-[#06D001]/80 hover:bg-[#32bd04]/80"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
