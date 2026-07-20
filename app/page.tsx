
import { Navbar1 } from "@/components/navbar";
import HeroSection from "@/components/hero";
import ServicesShowcase from "@/components/services";
import Footer from "@/components/footer";
import Principles from "@/components/principle";
import LocationSection from "@/components/location";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <ServicesShowcase />
      <Principles />
      <LocationSection />
      <Footer />
    </>
  );
}
