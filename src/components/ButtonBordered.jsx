import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.a`
    font-family: 'Open Sans',sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    border: 3px solid rgba(61, 169, 252, 1);
    color: rgba(9, 64, 103, 1);
    padding: 20px 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease-in-out;
    width: fit-content;
    
    &:hover {
        cursor: pointer;
        color: #FFFFFF;
        border: 3px solid rgba(9, 64, 103, 1);
        background-color: rgba(61, 169, 252, 1);
    }
`

function ButtonBordered({label,link, ...rest }) {
    return (
        <StyledButton {...rest} href={link}>{label}</StyledButton>
    );
}

ButtonBordered.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ButtonBordered;