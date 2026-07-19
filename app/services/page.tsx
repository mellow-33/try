import { Navbar1 } from "@/components/navbar";
import BreadcrumbHero from "./breadcrupm";
import { Footer } from "@/components/footer";
import { ServicesList } from "./services";
import HowItWorks from "./howitwork";

export default function Services(){
    return(
        <>
            <Navbar1 />
            <BreadcrumbHero />
            <ServicesList />
            <HowItWorks />
            <Footer />
        </>
    );
}