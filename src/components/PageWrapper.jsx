import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 10px;
    min-height: 100%;
`

function PageWrapper({children}) {
    return (
        <Container>{children}</Container>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageWrapper;