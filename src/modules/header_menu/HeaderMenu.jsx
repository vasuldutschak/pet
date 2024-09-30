import PropTypes from 'prop-types';
import styled from "styled-components";
import MenuItem from "../../components/MenuItem.jsx";

const HeaderMenuStyled = styled.nav`
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 30px;
    }
`

function HeaderMenu({items}) {
    return (
        <HeaderMenuStyled>
            <ul>
                {items.map(({text,link}) => (<li key={link}>
                    <MenuItem text={text} to={link} />
                </li>))}
            </ul>
        </HeaderMenuStyled>
    );
}

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })),
};

export default HeaderMenu;