
import { Navbar1 } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { ServicesShowcase } from "@/components/services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <ServicesShowcase />
      <div className="motion-preset-slide-right motion-duration-2000">
        <Footer />
      </div>
    </>
  );
}
