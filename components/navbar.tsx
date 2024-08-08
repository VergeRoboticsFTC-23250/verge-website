"use client"
import { Gilroy } from "@/app/layout"
import { cn } from "@/lib/utils";
import verge from "@/public/favicons/verge.svg"
import Image from "next/image"
import { useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-8 inset-x-0 w-fit mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Seasons">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/centerstage">2023-2024 Centerstage</HoveredLink>
            <HoveredLink href="/into-the-deep">2024-2025 Into The Deep</HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Seasons">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="2023-2024"
              href="/centerstage"
              src=""
              description="We made our debut in the 24-25 FTC season, Centerstage, as an 11 member rookie team."
            />
            <ProductItem
              title="2024-2025"
              href="/into-the-deep"
              src=""
              description="We Continued our FTC journey as a 13 member, second-year team in the 25-26 FTC seasn, Into the Deep."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="2023 Chassis"
              href=""
              src=""
              description="We created this chassis in the summer before our first competition season, and used it throughout the Centerstage season."
            />
            <ProductItem
              title="2024 Chassis"
              href=""
              src=""
              description="We made drastic improvements to our previous chassis by improving design and using carbon fiber for structural parts."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}