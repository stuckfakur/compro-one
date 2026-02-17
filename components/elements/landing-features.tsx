"use client";

import {
  ChessQueen,
  Gem,
  CircleUser,
  Handbag,
  Ribbon,
  QrCode,
  User2,
  GlobeIcon,
  HardDrive,
  ChevronRightCircle,
  TrafficCone,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function LandingFeatures() {
  const items = [
    {
      id: 1,
      name: "Premium Services",
      icon: <ChessQueen />,
      data: {
        icon: <Handbag className="w-10 h-10 text-primary" />,
        title:
          "Discover some of the powerful and stunning features of Essentials.",
        link: "#",
        img: "/assets/img/f-intro.jpg",
        items: [
          {
            icon: <Ribbon className="w-16 h-16 text-primary" />,
            name: "Easy to use features",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <GlobeIcon className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <User2 className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <QrCode className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Stunning Design",
      icon: <Gem />,
      data: {
        icon: <HardDrive className="w-10 h-10 text-primary" />,
        title:
          "Discover some of the powerful and stunning features of Essentials.",
        link: "#",
        img: "/assets/img/f-stunning.jpg",
        items: [
          {
            icon: <TrafficCone className="w-16 h-16 text-primary" />,
            name: "Easy to use features",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <GlobeIcon className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <User2 className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <QrCode className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Easy to Use",
      icon: <CircleUser />,
      data: {
        icon: <Handbag className="w-10 h-10 text-primary" />,
        title:
          "Discover some of the powerful and stunning features of Essentials.",
        link: "#",
        img: "/assets/img/f-easy.jpg",
        items: [
          {
            icon: <Ribbon className="w-16 h-16 text-primary" />,
            name: "Easy to use features",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <GlobeIcon className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <User2 className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
          {
            icon: <QrCode className="w-16 h-16 text-primary" />,
            name: "Join a friendly community",
            desc: "This is just a simple text made for this awesome template.",
          },
        ],
      },
    },
  ];

  const [tab, setTab] = useState(items[0]);
  const handleChangeTab = (id: number) => {
    const data = items.find((d) => d.id === id);
    if (data) {
      setTab(data);
    }
  };

  return (
    <section className="relative container flex flex-col lg:flex-row gap-8">
      <div className="w-[500px]">
        <div className="sticky top-24 left-0 space-y-4">
          <div className="w-fit bg-slate-200 text-slate-700 px-4 py-1 rounded-sm text-[12px]">
            Premium Features
          </div>
          <div className="font-bold text-4xl">
            Make the change. Get Essentials.
          </div>
          <p className="text-slate-600">
            We design and develop world-class websites and applications.
          </p>

          <ul className="space-y-4 mt-8">
            {items.length > 0 &&
              items.map((d, i) => (
                <li
                  onClick={() => handleChangeTab(d.id)}
                  key={i}
                  className={`flex gap-2 hover:bg-primary hover:text-white duration-300 transition-all px-4 py-2 rounded-md cursor-pointer ${tab.id === d.id ? "bg-primary text-white" : ""}`}
                >
                  {d.icon}
                  <span className="ml-2">{d.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex-1">
        {tab !== null && (
          <>
          {/* card with image */}
            <div
              className={`flex flex-col gap-2 h-[400px] overflow-hidden border shadow-lg rounded-lg w-full ${
                tab.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex-1 flex flex-col justify-center items-center">
                {tab.data.icon}
                <h1 className="text-4xl text-center">{tab.data.title}</h1>
                <a
                  href="#"
                  className="mt-12 text-primary gap-4 flex justify-between items-center"
                >
                  Get feature today <ChevronRightCircle />
                </a>
              </div>
              <div className="flex-1">
                <img
                  className="object-center w-full"
                  src={tab.data.img}
                  alt={`image ${tab.name}`}
                />
              </div>
            </div>
            {/* card features */}
            <div
              className={`mt-4 px-16 py-12 flex flex-col md:flex-row flex-wrap gap-4 overflow-hidden border shadow-lg rounded-lg w-full`}
            >
              {tab.data.items.length > 0 &&
                tab.data.items.map((d, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1 min-w-[300px]">
                    {d.icon}
                    <div className="grid">
                      <h3 className="text-center">{d.name}</h3>
                      <p className="text-center text-slate-600">{d.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
            {/* cta */}
            <div className="flex justify-evenly items-center py-12">
                <Button variant={tab.id % 2 === 0 ? 'blue' : 'default'}>Create an account</Button>
                <Button variant="ghost" className="flex items-center gap-2 px-8 py-4">Start working on projects <ChevronRightCircle/></Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
