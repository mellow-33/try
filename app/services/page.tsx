
import { Navbar1 } from "@/components/navbar";
import Footer from "@/components/footer";
import HeroServices from "./hero";
import CatalogoServizi from "./catalogue";
import TabellaCodiciPage from "./eercode";

export default function Services(){
    return(
        <>
            <Navbar1 />
            <HeroServices />
            <CatalogoServizi />
            <TabellaCodiciPage />
            <Footer />
        </>
    );
}