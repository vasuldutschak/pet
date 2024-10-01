import PropTypes from 'prop-types';
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle.jsx";
import SectionText from "../../components/SectionText.jsx";
import ButtonBlue from "../../components/ButtonBlue.jsx";
import BackgroundShape from "../../components/BackgroundShape.jsx";
import petsFoodImg from "../../assets/petsFoodImg.png";
import petsFoodBgImg from "../../assets/petFoodBg.png";

const PetsFoodContainer = styled.section`
    position: relative;
    background: url(${petsFoodBgImg});
    background-size: auto 80%; /* Це розтягує зображення, щоб воно займало всю секцію */
    background-position: left center;
    background-repeat: no-repeat;
    background-color: #F4FAFF;
    padding: 150px 0;
    .content_container{
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        column-gap: 25px;
        .content_item{
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
        }
    }
`

function PetsFoodSection(props) {
    return (
        <PetsFoodContainer>
            <div className="content_container">
                <div className="content_item"></div>
                <div className="content_item">
                    <SectionTitle>Get Pet’s Food & Accesories Here</SectionTitle>
                    <SectionText>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</SectionText>
                    <ButtonBlue label={'Shop Now'} link={'/shop'}/>
                </div>
            </div>
            <BackgroundShape image={petsFoodImg} alt={'Get Pet’s Food & Accesories Here'} right={'0px'} bottom={'-10%'} />
        </PetsFoodContainer>
    );
}

PetsFoodSection.propTypes = {

};

export default PetsFoodSection;