import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle.jsx";
import ButtonBlue from "../../components/ButtonBlue.jsx";
import SectionText from "../../components/SectionText.jsx";
import image from './../../assets/take_care.png'
import BackgroundShape from "../../components/BackgroundShape.jsx";
import leftTopImage from "../../assets/left_top.png";
import leftBottomImage from "../../assets/left_bottom.png";
import rightBottomImage from "../../assets/bootom_right.png";
import rightTopImage from "../../assets/top_right.png";


const TakeCareSectionStyled = styled.section`
    margin-top: 60px;
    max-width: 1400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;

    .image_container, .content_container {
        flex-basis: 50%;
    }

    .content_container {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .image_container {
        position: relative;
        img {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

function TakeCareSection(props) {
    return (
        <TakeCareSectionStyled>
            <div className="content_container">
                <SectionTitle>We Take Care Pet Safe & Happy</SectionTitle>
                <SectionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</SectionText>
                <ButtonBlue label={'Get Started'} link={'/get_started'}/>
            </div>
            <div className="image_container">
                <img src={image} alt="We Take Care Pet Safe & Happy"/>
                <BackgroundShape image={leftTopImage} alt={"We Take Care Pet Safe & Happy"} top={'-9%'} left={'-5%'}/>
                <BackgroundShape image={leftBottomImage} alt={"We Take Care Pet Safe & Happy"} bottom={'-7%'} left={'5%'}/>
                <BackgroundShape image={rightBottomImage} alt={"We Take Care Pet Safe & Happy"} bottom={'-7%'} right={'0%'}/>
                <BackgroundShape image={rightTopImage} alt={"We Take Care Pet Safe & Happy"} top={'-6%'} right={'-8%'}/>
            </div>
        </TakeCareSectionStyled>
    );
}

export default TakeCareSection;