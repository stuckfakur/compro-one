import LandingBenefit from "@/components/elements/landing-benefit";
import LandingHero from "@/components/elements/landing-hero";
import LandingSession from "@/components/elements/landing-session";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is a main page",
};

export default function Page() {
  return (
    <main className="min-h-[150vh] bg-white">
      <LandingHero />
      <LandingBenefit />
      <LandingSession />
    </main>
  );
}
