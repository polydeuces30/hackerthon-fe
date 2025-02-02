"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type Content = {
  id: string;
  thumbnail: string;
  title: string;
  date: Date;
  views: number;
  subscriptions: number;
  gifts: number;
};

export const columns: ColumnDef<Content>[] = [
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      const imageUrl = row.getValue("thumbnail");
      return (
        <Image
          src={`/images/content/${imageUrl}`}
          alt="Thumbnail"
          width={50}
          height={50}
          quality={100}
          className="w-full"
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "views",
    header: "Views",
  },
  {
    accessorKey: "subscriptions",
    header: "Subscriptions",
  },
  {
    accessorKey: "gifts",
    header: "Gifts",
  },
];
