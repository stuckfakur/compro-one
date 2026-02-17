import { CircleChevronRight, Earth, MapPlus } from "lucide-react";
import { SpeedIcon } from "../icons/SpeedIcon";
import { SecurePaymentIcon } from "../icons/SecurePaymentIcon";

export default function LandingSession() {
  const sessions = [
    {
      name: "Robust Features",
      icon: <MapPlus />,
      title: "Make a Big Shift in your Company Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      theme: "text-primary",
      image: "/assets/img-session.png",
      imageText: "Craete Beautiful Sites in no Time",
      imageLink: "#",
      items: [
        {
          title: "High Speed Services",
          description: "Very fast performance",
          icon: <SpeedIcon className="w-12 h-12 text-primary" />,
        },
        {
          title: "Secure Payments",
          description: "All payments are 3D secured",
          icon: <SecurePaymentIcon className="w-12 h-12 text-primary" />,
        },
      ],
    },
    {
      name: "Robust Features",
      icon: <Earth />,
      title: "Create Great Looking Websites with Essentials!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      theme: "text-blue-600",
      image: "/assets/img-session2.png",
      imageText: "View our full features list",
      imageLink: "#",
      items: [
        {
          title: "Easy to Use",
          description: "Create websites in no time",
          icon: <SpeedIcon className="w-12 h-12 text-blue-600" />,
        },
        {
          title: "Advanced options",
          description: "Unlimited possibilities",
          icon: <SecurePaymentIcon className="w-12 h-12 text-primary" />,
        },
      ],
    },
  ];

  return (
    <section>
      {sessions.length > 0 &&
        sessions.map((d, i) => (
          <div
            key={d.title + i}
            className={`${
              i % 2 === 0 ? " flex flex-col justify-between gap-20 container w-full lg:flex-row" : "flex flex-col justify-between gap-20 container w-full lg:flex-row-reverse"
            }`}
          >
            <div className="flex-1 space-y-2">
              <div className="relative w-full aspect-video space-y-8">
                <img src={d.image} alt="img session" />
                <div className="grid lg:grid-cols-2 gap-2">
                  {d.items.length > 0 &&
                    d.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex justify-start items-center gap-6"
                      >
                        {item.icon}
                        <div className="space-y-1">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-evenly">
              <div className="flex items-center gap-2">
                {d.icon}
                <p className="font-bold">{d.name}</p>
              </div>
              <h1>{d.title}</h1>
              <p className="text-slate-700 text-xl">{d.description}</p>
              <a href={d.imageLink} className="text-primary flex gap-2">
                Start working on projects <CircleChevronRight />
              </a>
            </div>
          </div>
        ))}
    </section>
  );
}
