
import { Navbar1 } from "@/components/navbar";
import HeroServices from "./hero";
import CatalogoServizi from "./catalogue";

export default function Services(){
    return(
        <>
            <Navbar1 />
            <HeroServices />
            <CatalogoServizi />
        </>
    );
}