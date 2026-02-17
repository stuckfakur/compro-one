import LandingBenefit from "@/components/elements/landing-benefit";
import LandingFeatures from "@/components/elements/landing-features";
import LandingHero from "@/components/elements/landing-hero";
import LandingPortfolio from "@/components/elements/landing-portfolio";
import LandingSession from "@/components/elements/landing-session";
import LandingTestimonial from "@/components/elements/landing-testimonial";
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
      <LandingPortfolio />
      <LandingFeatures />
      <LandingTestimonial />
    </main>
  );
}
