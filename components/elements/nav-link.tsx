"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import {
  BadgeDollarSign,
  Ellipsis,
  Menu,
  MessageCircleQuestionMark,
  Package,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const components: {
  group: string;
  items: { title: string; href: string; icon?: React.ReactNode }[];
}[] = [
  // Products
  {
    group: "Products",
    items: [
      {
        title: "Service",
        href: "/sample/service",
        icon: <Package />,
      },
      {
        title: "Features",
        href: "/sample/features",
        icon: <Menu />,
      },
    ],
  },
  // Tools
  {
    group: "Tools",
    items: [
      {
        title: "Works",
        href: "/sample/works",
        icon: <Package />,
      },
      {
        title: "Pricing",
        href: "/sample/pricing",
        icon: <BadgeDollarSign />,
      },
    ],
  },
  // Miscellaneous
  {
    group: "Miscellaneous",
    items: [
      {
        title: "FAQ",
        href: "/sample/faq",
        icon: <MessageCircleQuestionMark />,
      },
      {
        title: "Term & Conditions",
        href: "/sample/tnc",
        icon: <ShieldCheck />,
      },
      {
        title: "Reviews",
        href: "/sample/reviews",
        icon: <Star />,
      },
      {
        title: "Support",
        href: "/sample/support",
        icon: <Phone />,
      },
      {
        title: "Custom 404 Page",
        href: "/sample/404",
        icon: <Ellipsis />,
      },
    ],
  },
];

export default function Navlink() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* products */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[450px] flex flex-col max-h-[400px] overflow-hidden flex-wrap">
              {components.map((c) => (
                <div key={c.group}>
                  <p className="font-bold pl-2 mb-2">{c.group}</p>
                  <ul className="w-[200px] flex flex-col flex-wrap py-2">
                    {c.items.map((i: any) => (
                      <ListItem
                        key={i.title}
                        title={i.title}
                        href={i.href}
                        icon={i.icon}
                      ></ListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="group relative w-full h-18 overflow-hidden">
              <img
                className="object-cover group-hover:cursor-pointer group-hover:scale-140 transition-all duration-300"
                src="/cta-layer.jpg"
                alt="cta"
              />
              <div className="group-hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white">
                <span className="font-semibold whitespace-nowrap">
                  Company Profile Sample
                </span>
                <Button variant="default">Check it Now!</Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* blogs */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/blogs">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* about */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  icon,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium flex gap-4">
              {icon} {title}
            </div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
