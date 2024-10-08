import TakeCareSection from "../modules/take_care_section/TakeCareSection.jsx";
import ServiceSection from "../modules/service_section/ServiceSection.jsx";
import PetLoversSection from "../modules/pet_lovers_section/PetLoversSection.jsx";
import PetsFoodSection from "../modules/accesories_section/PetsFoodSection.jsx";
import FeedbackSection from "../modules/feedbackSection/FeedbackSection.jsx";
import FeedbackFormSection from "../modules/feedback_form_section/FeedbackFormSection.jsx";

function Home(props) {
    return (
        <>
            <TakeCareSection/>
            <ServiceSection/>
            <PetLoversSection/>
            <PetsFoodSection/>
            <FeedbackSection/>
            <FeedbackFormSection/>
        </>
    );
}

export default Home;