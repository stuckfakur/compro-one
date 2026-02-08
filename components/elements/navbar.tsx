import React from "react";
import Link from "next/link";
import NavbarTop from "./navbar-top";
import NavbarBot from "./navbar-bot";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full">
      <div className="relative z-10 bg-card/60 ring-1 ring-border backdrop-blur-lg">
        <NavbarTop />
        <div className="container flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-dark.png"
                width={100}
                height={100}
                alt="logo"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">Menu</div>
        </div>
        <div className="w-full h-px shadow-[0_1px_0_oklch(var(--border)_/_30%)]" />
        <NavbarBot />
      </div>
      <div className="absolute top-0 z-0 w-full h-full bg-background/80" />
    </header>
  );
}
