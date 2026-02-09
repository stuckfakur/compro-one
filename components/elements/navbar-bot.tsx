import {
  Facebook,
  Instagram,
  MapPin,
  Search,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { NavSearch } from "./nav-search";

export default function NavbarBot() {
  const socials = [
    {
      name: "instagram",
      link: "https://instagram.com/compro_one",
      icon: <Instagram />,
    },
    {
      name: "facebook",
      link: "https://facebook.com/compro_one",
      icon: <Facebook />,
    },
    {
      name: "twitter",
      link: "https://twitter.com/compro_one",
      icon: <Twitter />,
    },
  ];

  return (
    <div className="w-full h-10 flex items-center border-1">
      <div className="container flex justify-between items-center h-full">
        <div className="flex items-center gap-4 h-full">
          <div className="flex items-center gap-4">
            <MapPin />
            <span>Bogor</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-4">
            <ShoppingBag />
            <span>Purchase this</span>
          </div>
        </div>
        <div className="flex items-center gap-4 h-full">
          <NavSearch />
          <Separator orientation="vertical" />
          {socials &&
            socials.length > 0 &&
            socials.map((r, i) => (
              <a className="cursor-pointer" href={r.link} key={i}>
                {r.icon}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
