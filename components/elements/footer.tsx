import { Badge, Ribbon } from "lucide-react";
import { Button } from "../ui/button";

export interface Menu {
  group: string;
  items: {
    title: string;
    link: string;
  }[];
}

export default function Footer() {
  const menus: Menu[] = [
    {
      group: "Company",
      items: [
        {
          title: "About",
          link: "#",
        },
        {
          title: "The Team",
          link: "#",
        },
        {
          title: "Assets",
          link: "#",
        },
        {
          title: "Knowledge Base",
          link: "#",
        },
        {
          title: "Sales",
          link: "#",
        },
        {
          title: "Social Media",
          link: "#",
        },
      ],
    },
    {
      group: "Our Products",
      items: [
        {
          title: "Landing Page",
          link: "#",
        },
        {
          title: "Company Profile",
          link: "#",
        },
        {
          title: "POS Cashier",
          link: "#",
        },
      ],
    },
    {
      group: "Our Services",
      items: [
        {
          title: "Integrated Maps",
          link: "#",
        },
        {
          title: "Integrated Payment",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="container w-full">
      <div className="grid grid-cols-2 gap-2 px-4 py-6">
        <div className="flex flex-col justify-between gap-4">
          <div className="max-w-[400px]">
            <img src="/assets/logo-dark.png" alt="logo" className="h-12" />
            <p>
              Reinventing the way you create websites, say hi to the most
              powerful WordPress theme available on the market, made by Me.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <img
              className="w-18"
              src="/assets/logo-footer-1.png"
              alt="footer-logo-1"
            />
            <img
              className="w-18"
              src="/assets/logo-footer-2.png"
              alt="footer-logo-2"
            />
            <Button variant="secondary">
              <Ribbon /> More Certification
            </Button>
          </div>
          <p className="italic text-slate-400">
            Essentials by pixfort © All rights reserved
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {menus &&
            menus.map((item) => (
              <div key={item.group}>
                <p className="font-bold">{item.group}</p>
                <ul className="space-y-2 mt-2">
                  {item.items.map((p) => (
                    <li key={p.title}>
                      <a href={p.link}>{p.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
