"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname.startsWith(path)
      ? "bg-gradient-to-r from-[#06D001] to-[#FFFF0C] bg-clip-text text-transparent"
      : "";
  return (
    <div className="flex gap-16 mb-10">
      <Link
        href="/profile"
        className={`text-2xl md:text-3xl font-semibold ${isActive("/profile/about")}`}
      >
        About
      </Link>
      <Link
        href="/profile/channel"
        className={`text-2xl md:text-3xl font-semibold ${isActive("/profile/channel")}`}
      >
        Channel
      </Link>
    </div>
  );
}
