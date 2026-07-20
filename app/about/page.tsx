import Footer from "@/components/footer";
import { Navbar1 } from "@/components/navbar";
import BreadcrumbHero from "./breadcrupm";
import { Hero1 } from "./hero";
import { Team } from "./team";

export default function AboutUs(){
    return (
        <>
        <Navbar1 />
        <BreadcrumbHero />
        <Hero1 />
        <Team />
        <Footer />
        </>
    );
}