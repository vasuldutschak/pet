import PropTypes from 'prop-types';
import styled from "styled-components";
import BackgroundShape from "../../components/BackgroundShape.jsx";
import feedbackImgBg from '../../assets/feedbackBg.png'
import feedbackImg from '../../assets/feedbackImg.png'
import FeedbackItem from "../../components/FeedbackItem.jsx";

const FeedbackSectionStyled = styled.section`
    position: relative;
    padding: 25px 0;
    margin: 100px 0;
    
    .content_container{
        max-width: 1400px;
        width: 100%;
        display: flex;
        column-gap: 50px;
        align-items: center;
        margin: 0 auto;
        justify-content: space-between;
        .content_item{
            flex-basis: 50%;
        }
    }
`

function FeedbackSection(props) {
    return (
        <FeedbackSectionStyled>
            <div className="content_container">
                <div className="content_item">
                    <FeedbackItem feedback='“All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true on the Internet.”'
                        occupation='Software Engineer, USA'
                        userName='Adam morlk'
                        rating={5}
                    />
                </div>
                <div className="content_item">
                    <img src={feedbackImg} alt="user"/>
                </div>
            </div>
            <BackgroundShape image={feedbackImgBg} alt={'client feedback'} right={'0px'} bottom={'-10%'}/>
        </FeedbackSectionStyled>
    );
}

FeedbackSection.propTypes = {

};

export default FeedbackSection;