import PropTypes from 'prop-types';
import styled from "styled-components";

const IconLinkStyled = styled.a`
    text-decoration: none;
    transition: all .3s ease-in-out;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: rgba(9, 64, 103, 1);
    color: rgba(255, 255, 255, 1);

    &:hover {
        cursor: pointer;
        background-color: rgba(61, 169, 252, 1);
        transform: scale(1.1);
    }
`

function IconLink({link,icon:Icon,size=10,...rets}) {
    return (
        <IconLinkStyled href={link} {...rets} target="_blank" rel="noopener noreferrer">
            <Icon size={size}/>
        </IconLinkStyled>
    );
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    size: PropTypes.number,
};

export default IconLink;