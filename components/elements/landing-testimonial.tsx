import { Star } from "lucide-react";
import { StarIcon } from "../icons/StarIcon";
import { Button } from "../ui/button";

export default function LandingTestimonial() {
  const items = [
    {
      pic: "/assets/img/tm-1.png",
      name: "Maria Claud",
      by: "via contact",
      desc: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life a lot easier!",
      rating: 5,
    },
    {
      pic: "/assets/img/tm-2.png",
      name: "Anata Touli",
      by: "via contact",
      desc: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life a lot easier!",
      rating: 5,
    },
    {
      pic: "/assets/img/tm-3.png",
      name: "Nadine Petrolli",
      by: "via contact",
      desc: "I am a web designer, you guys are very inspiring. I wish to see more work from you, maybe more freebies. Using pixfort products made my life a lot easier!",
      rating: 5,
    },
  ];

  return (
    <section className="relative my-20">
      <div className="absolute top-0 left-0 slated-bg min-h-screen w-full"></div>
      <div className="relative container py-42">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="space-y-6">
            <div className="badge-black">Made by beno dev</div>
            <h1 className="text-white text-4xl">
              High Quality & Prestigious Brands
            </h1>
          </div>

          <div className="space-y-6">
            <div className="badge-black">Rated 4.9 of 5</div>
            <h5 className="text-slate-600">5-Star Rated Theme</h5>
            <div className="flex gap-2 items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="text-[#ffd900] w-10 h-10" />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-slate-700">
              Advanced cameras combined with a large display and fast
              performance.
            </p>
            <Button variant="blue">Get our theme today</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-12">
          {items.length > 0 &&
            items.map((d, i) => (
              <div
                key={i}
                className="bg-slate-100 px-6 py-4 shadow-lg rounded-lg flex flex-col justify-center items-center gap-6"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    className="object-cover"
                    src={d.pic}
                    alt={`img-${d.name}`}
                  />
                </div>
                <p className="text-slate-700 text-center">{d.desc}</p>
                <div className="bg-yellow-400/20 rounded-xs px-4 py-2 flex items-center justify-center gap-1">
                  {[...Array(d.rating)].map((_, i) => (
                    <StarIcon key={i} className="text-[#ffd900] w-4 h-4" />
                  ))}
                </div>
                <div className="text-center">
                <h5 className="text-center">
                    {d.name}
                </h5>
                <p className="text-green-600">
                    {d.by}
                </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
