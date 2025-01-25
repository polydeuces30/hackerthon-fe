import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#999999] w-full px-16 py-8">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-11 pt-10">
          <div className="col-span-3">
            <Image
              src="/images/footer/logo.svg"
              alt="floo"
              width={100}
              height={100}
              className="w-2/3"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="text-white">
              Home
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="">Categories</Link>
              <Link href="">Devices</Link>
              <Link href="">Pricing</Link>
              <Link href="">FAQ</Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/directory" className="text-white">
              Live Channels
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="">Genres</Link>
              <Link href="">Trending</Link>
              <Link href="">New Comers</Link>
              <Link href="">Popular</Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/support" className="text-white">
              Support
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <h3 className="text-white">Connect With Us</h3>
            <div className="flex gap-3">
              <Link
                href=""
                className="flex items-center justify-center w-14 h-14 rounded-xl border border-[#262626] bg-[#1A1A1A]"
              >
                <Image
                  src="/images/footer/facebook.svg"
                  alt="facebook"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </Link>
              <Link
                href=""
                className="flex items-center justify-center w-14 h-14 rounded-xl border border-[#262626] bg-[#1A1A1A]"
              >
                <Image
                  src="/images/footer/twitter.svg"
                  alt="twitter"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </Link>
              <Link
                href=""
                className="flex items-center justify-center w-14 h-14 rounded-xl border border-[#262626] bg-[#1A1A1A]"
              >
                <Image
                  src="/images/footer/linkedin.svg"
                  alt="linkedin"
                  width={100}
                  height={100}
                  className="w-7"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-2 border-t border-[#262626]">
          <h5>@2025 floo, All Rights Reserved</h5>
          <div className="flex">
            <h5 className="border-r-2 border-[#262626] px-3">Terms of Use</h5>
            <h5 className="border-r-2 border-[#262626] px-3">Privacy Policy</h5>
            <h5 className="px-3">Cookie Policy</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
