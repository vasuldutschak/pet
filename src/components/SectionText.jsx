import PropTypes from 'prop-types';
import styled from "styled-components";

const SectionTextStyled = styled.p`
    color: rgba(78, 97, 109, 1);
    line-height: 28px;
    font-size: 18px;
    word-wrap: break-word;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 10px 0;
    z-index: 100;
    position: relative;
`

function SectionText({children,...rest}) {
    return (
        <SectionTextStyled {...rest}>{children}</SectionTextStyled>
    );
}

SectionText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionText;