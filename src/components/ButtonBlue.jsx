import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.a`
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    background-color: #3DA9FC;
    color: rgba(236, 247, 255, 1);
    padding: 20px 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    transition: background-color .3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #0D7AAF;
    }
`

function ButtonBlue({label,link, ...rest }) {
    return (
        <StyledButton {...rest} href={link}>{label}</StyledButton>
    );
}

ButtonBlue.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ButtonBlue;