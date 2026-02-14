import { Menu, Phone } from "lucide-react";
import { Button } from "../ui/button";

export default function LandingHero() {
  return (
    <section className="overflow-hidden relative w-full h-[80vh] bg-[linear-gradient(to_right_bottom,rgb(37,204,15)_0%,rgb(255,255,255)_50%)]">
      <div className="z-[1-] triagle-lr absolute top-1/2 left-0 transform -translate-y-1/2 w-full"></div>

      <div className="h-full container relative">
        <img
          className="w-[40vw] absolute top-1/2 right-6 transform -translate-y-1/2 rounded-lg hover:scale-[110%] duration-300"
          src="/assets/img-intro.png"
          alt="intro"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-1 md:max-w-[33vw] space-y-4">
          <h1 className="text-white font-medium text-6xl text-left">
            Discover the story behind Essentials theme
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore aliqua.
          </p>
          <div className="flex items-center justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-600/90 text-white cta-button">
              <Menu /> Our Services
            </button>
            <button className="bg-slate-100 hover:bg-slate-100/90 text-slate-800 cta-button">
              <Phone /> Contact
            </button>
          </div>
          <p className="text-slate-200">
            Get our latest news and updates. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
