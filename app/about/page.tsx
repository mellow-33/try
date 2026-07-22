
import Footer from "@/components/footer";
import { Navbar1 } from "@/components/navbar";
import AboutUsIntro from "./aboutus";
import TextInfoSection from "./textinfo";

export default function AboutUs(){
    return (
        <>
        <Navbar1 />
        <AboutUsIntro />
        <TextInfoSection />
        <Footer />
        </>
    );
}