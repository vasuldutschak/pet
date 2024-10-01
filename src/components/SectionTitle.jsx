import PropTypes from 'prop-types';
import styled from "styled-components";

const SectionTitleStyled = styled.h2`
    color: rgba(9, 64, 103, 1);
    font-weight: 600;
    line-height: 74px;
    font-size: 58px;
    margin: 0;
    word-wrap: break-word;
    font-family: 'Open Sans', sans-serif;
    z-index: 100;
    position: relative;
`

function SectionTitle({children,...rest}) {
    return (
        <SectionTitleStyled {...rest}>{children}</SectionTitleStyled>
    );
}

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionTitle;