import PropTypes from 'prop-types';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledMenuItem = styled(NavLink)`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    line-height: 20px;
    color: rgba(78, 97, 109, 1);
    transition: color .3s ease-in-out;
    
    &:hover,&.active {
        color: rgba(61, 169, 252, 1);
        cursor: pointer;
    }
`

function MenuItem({text,...allyProps}) {
    return (
        <StyledMenuItem {...allyProps}>{text}</StyledMenuItem>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
};

export default MenuItem;