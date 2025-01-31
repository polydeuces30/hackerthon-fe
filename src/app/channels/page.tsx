"use client";

import SwiperHero from "./components/SwiperHero";
import Layout from "@/layouts/Layout";

export default function ChannelsPage() {
  return (
    <Layout withFooter withNavbar>
      <div className="px-[10%] py-24 bg-[#141414]">
        <SwiperHero />
      </div>
    </Layout>
  );
}
