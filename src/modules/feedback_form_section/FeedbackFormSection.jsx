import styled from 'styled-components'
import BackgroundShape from "../../components/BackgroundShape.jsx";
import feedbackFormBgSection from '../../assets/feedbackFormBgSection.png'
import SectionTitle from "../../components/SectionTitle.jsx";
import FormFeedback from "../../components/FormFeedback.jsx";
import topLeftBg from '../../assets/top_left_form_bg.png';
import bottomRightBg from '../../assets/bottom_right_form_bg.png';

const FeedbackFormSectionStyled = styled.section`
    width: 100%;
    position: relative;
    z-index: 100;
`
const ContentContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    background: rgba(9, 64, 103, 1);
    padding: 142px 0;
    position: relative;
    z-index: 1000;
    overflow: hidden;

`

function FeedbackFormSection(props) {
    return (
        <FeedbackFormSectionStyled>
            <ContentContainer>
                <SectionTitle style={{color:"rgba(255, 255, 255, 1)",textAlign:"center",marginBottom:"50px"}}>Want to Adopt a pet ?</SectionTitle>
                <FormFeedback/>
                <BackgroundShape image={topLeftBg} alt={'feedback'} left={'-3%'} top={'-13%'}/>
                <BackgroundShape image={bottomRightBg} alt={'feedback'} right={'-3%'} bottom={'-13%'}/>
            </ContentContainer>
            <BackgroundShape image={feedbackFormBgSection} alt={'feedback'} left={'0px'} bottom={'-30%'}/>
        </FeedbackFormSectionStyled>
    );
};

FeedbackFormSection.propTypes = {};

export default FeedbackFormSection;