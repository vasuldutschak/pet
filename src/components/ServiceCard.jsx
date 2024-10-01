import PropTypes from 'prop-types';
import styled from "styled-components";

const ServiceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    justify-content: center;
    
    .image_container{
        max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    h3.service_title{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        color: rgba(9, 64, 103, 1);
    }
    p.service_text{
        font-family: 'Open Sans',sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
        text-align: center;
        color: rgba(78, 97, 109, 1);
    }
`

function ServiceCard({image,title, text}) {
    return (
        <ServiceCardContainer>
            <img src={image} alt={title} />
            <h3 className="service_title">{title}</h3>
            <p className="service_text">{text}</p>
        </ServiceCardContainer>
    );
}

ServiceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ServiceCard;