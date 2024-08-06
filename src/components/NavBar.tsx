"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
 
export function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <HoveredLink href="/">Home</HoveredLink>
           
        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/categories/classic">The Classic</HoveredLink>
            <HoveredLink href="/categories/dark">Dark Memes</HoveredLink>
            <HoveredLink href="/categories/adult">Adult Memes</HoveredLink>
            <HoveredLink href="/categories/developer">Developer memes</HoveredLink>
            <p>more categories soon..</p>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutPages/aboutPage">About this Page</HoveredLink>
            <HoveredLink href="/aboutPages/aboutCreator">About Creator</HoveredLink>
            <HoveredLink href="/aboutPages/aboutTechStack">About Tech-stack</HoveredLink>
          </div>
        </MenuItem>   

        <HoveredLink href="/PersonalMemes">Personal❤️‍🔥</HoveredLink>
          
      </Menu>
    </div>
  );
}