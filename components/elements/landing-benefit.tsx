import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Blend, BusFront } from "lucide-react";
import { DocLayer } from "../icons/DocsLayer";
import { InfiniteIcon } from "../icons/InfiniteIcon";

export default function LandingBenefit() {
  const smallContents = [
    {
      id: 1,
      src: "/assets/icon-shop.png",
      alt: "online-shop",
      tooltip: "online shop",
    },
    {
      id: 2,
      src: "/assets/icon-earth.png",
      alt: "worldwide",
      tooltip: "world wide",
    },
    {
      id: 3,
      src: "/assets/icon-lock.png",
      alt: "secure-platform",
      tooltip: "secure platform",
    },
  ];

  const contents = [
    {
      id: 1,
      icon: <BusFront className="w-12 h-12" />,
      title: "Easy to Use",
      desc: "Create awesome and great looking websites.",
    },
    {
      id: 2,
      icon: <Blend className="w-12 h-12" />,
      title: "Fast Integration",
      desc: "Create awesome and great looking websites.",
    },
    {
      id: 3,
      icon: <DocLayer className="w-12 h-12" />,
      title: "Well Documented",
      desc: "Create awesome and great looking websites.",
    },
    {
      id: 4,
      icon: <InfiniteIcon className="w-12 h-12" />,
      title: "Unlimited Possibilities",
      desc: "Create awesome and great looking websites.",
    },
  ];
  return (
    <section className="container">
      <p className="text-green-400 px-4 py-2 rounded md bg-slate-200 w-fit">
        Made by Beno Dev
      </p>
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-4xl">
          Reinventing the Way <br></br> you Create Websites.
        </h1>
        <div className="flex justify-end items-center gap-[-4px]">
          <div className="group flex justify-center items-center gap-2">
            {smallContents.length > 0 &&
              smallContents.map((i) => (
                <Tooltip key={i.id}>
                  <TooltipTrigger>
                    <div className="group-hover:mr-0 duration-300 transition-all mr-[-40px] border-4 border-white rounded-full overflow-hidden w-16 h-16">
                      <img className="object cover " src={i.src} alt={i.alt} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{i.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
          </div>
          <a href="/about" className="ml-[50px]">
            Learn about us {">"}
          </a>
        </div>
      </div>
      <div className="flex justify-evently items-center gap-2 py-12">
        {contents.length > 0 &&
          contents.map((i) => (
            <div className="p-4 rounded-lg hover:bg-[#55BA63] hover:text-white duration-300 transition-all grid gap-2 justify-items-center" key={i.id}>
              {i.icon}
              <h5>{i.title}</h5>
              <p className="text-center">{i.desc}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
