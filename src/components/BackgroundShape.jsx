import PropTypes from 'prop-types';
import styled from "styled-components";

const BackgroundShapeContainer = styled.div`
    position: absolute;
    z-index: 1;
    img{
        max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

function BackgroundShape({image,alt,top,left,bottom,right}) {
    return (
        <BackgroundShapeContainer style={{top,left,bottom,right}}>
            <img src={image} alt={alt}/>
        </BackgroundShapeContainer>
    );
}

BackgroundShape.propTypes = {
    image: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
    top: PropTypes.string,
    left: PropTypes.string,
    bottom: PropTypes.string,
    right: PropTypes.string,
};

export default BackgroundShape;