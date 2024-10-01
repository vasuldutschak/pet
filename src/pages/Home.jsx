import TakeCareSection from "../modules/take_care_section/TakeCareSection.jsx";
import ServiceSection from "../modules/service_section/ServiceSection.jsx";
import PetLoversSection from "../modules/pet_lovers_section/PetLoversSection.jsx";

function Home(props) {
    return (
        <>
            <TakeCareSection/>
            <ServiceSection/>
            <PetLoversSection/>
        </>
    );
}

export default Home;