"use client";
import Link from "next/link";
import { Box, LineChart } from "lucide-react";
import { Label } from "./ui/label";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const pathname = usePathname();

  const activeLinkStyle = "text-[hsl(var(--primary))]";

  return (
    <aside className="flex flex-col gap-4 py-16 px-12 border-r h-screen">
      <Link
        className={`flex gap-4 group items-center ${
          pathname == "/dashboard/overview" ? activeLinkStyle : ""
        }`}
        href={"/"}
      >
        <LineChart className="group-hover:text-[hsl(var(--primary))]" />
        <Label className="group-hover:text-[hsl(var(--primary))]">
          Overview
        </Label>
      </Link>
      <Link
        className={`flex gap-4 group items-center ${
          pathname == "/dashboard/inventory" ? activeLinkStyle : ""
        }`}
        href={"/dashboard/inventory"}
      >
        <Box className="group-hover:text-[hsl(var(--primary))]" />
        <Label className="group-hover:text-[hsl(var(--primary))]">
          Inventory
        </Label>
      </Link>
    </aside>
  );
};
