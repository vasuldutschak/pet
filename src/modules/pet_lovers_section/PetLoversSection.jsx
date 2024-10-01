import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle.jsx";
import SectionText from "../../components/SectionText.jsx";
import BackgroundShape from "../../components/BackgroundShape.jsx";
import dog from './../../assets/dog.png'
import bgShapeImage from './../../assets/left_bg_shape.png'
import ButtonBordered from "../../components/ButtonBordered.jsx";

const PetLoversSectionContainer = styled.section`
    width: 100%;
    position: relative;
    margin-top: 100px;
    
    .content_container {
        max-width: 1400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 35px;
        margin: 60px auto;
        position: relative;
        z-index: 100;
        
        .content,.image{
            flex-basis: 50%;
        }
        .content{
            display: flex;
            flex-direction: column;
            row-gap: 25px;
        }
    }
`

function PetLoversSection(props) {
    return (
        <PetLoversSectionContainer>
            <div className="content_container">
                <div className="content">
                    <SectionTitle>If you are a pet Lover, here the right palce</SectionTitle>
                    <SectionText>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.</SectionText>
                    <ButtonBordered label={"Adopt me"} link={'/adopt'}/>
                </div>
                <div className="image">
                    <img src={dog} alt={"If you are a pet Lover, here the right palce"}/>
                </div>
            </div>
            <BackgroundShape image={bgShapeImage} alt={"If you are a pet Lover, here the right palce"} left={'0px'} top={'30%'}/>
        </PetLoversSectionContainer>
    );
}

export default PetLoversSection;