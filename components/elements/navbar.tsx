import React from "react";
import Link from "next/link";
import NavbarTop from "./navbar-top";
import NavbarBot from "./navbar-bot";
import Navlink from "./nav-link";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Languages } from "lucide-react";

export default function Navbar() {
  return (
    <>
    <NavbarTop/>
    <header className="sticky top-0 left-0 z-50 w-full">
      <div className="relative z-10 bg-card/60 ring-1 ring-border backdrop-blur-lg">
        <div className="container flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 mr-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-dark.png"
                width={100}
                height={100}
                alt="logo"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
            <Navlink />
          </div>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  <Languages /> Languages
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full grid gap-2">
                  <Link className="w-full rounded-md hover:bg-primary/50 hover:text-white px-4 py-2" href="/en" children="EN"/>
                  <Link className="w-full rounded-md hover:bg-primary/50 hover:text-white px-4 py-2" href="/id" children="ID"/>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="w-full h-px shadow-[0_1px_0_oklch(var(--border)_/_30%)]" />
      </div>
      <div className="absolute top-0 z-0 w-full h-full bg-background/80" />
    </header>
    <NavbarBot/>
    </>
  );
}
