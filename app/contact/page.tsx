import { Navbar1 } from "@/components/navbar";
import BreadcrumbHero from "./breadcrupm";
import ContactPage from "./contactus";
import { Footer } from "@/components/footer";

export default function ContactUS(){
    return(
        <>
            <Navbar1 />
            <BreadcrumbHero />
            <ContactPage />
            <Footer />
        </>
    );
}