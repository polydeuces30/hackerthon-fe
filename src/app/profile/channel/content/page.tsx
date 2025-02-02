import Layout from "@/layouts/Layout";
import Image from "next/image";
import Header from "@/components/pages/profile/Header";
import { Content, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Content[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      thumbnail: "thumbnail1.svg",
      title: "Minji",
      date: new Date("2025-02-02T00:00:00Z"),
      views: 200000,
      subscriptions: 2000,
      gifts: 1000,
    },
    // ...
  ];
}

export default async function Profile() {
  const data = await getData();
  return (
    <Layout withFooter={false} withNavbar>
      <div className="w-full px-10 md:px-28 py-5 font-manrope text-white">
        <Header />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </Layout>
  );
}
