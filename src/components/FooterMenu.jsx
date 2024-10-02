import PropTypes from 'prop-types';
import styled from "styled-components";

const FooterMenuStyled = styled.div`
    h3{
        font-family: ' Open Sans', sans-serif;
        font-size: 26px;
        font-weight: 600;
        line-height: 12px;
        text-align: left;
        color: rgba(12, 16, 112, 1);
        margin-bottom: 15px;
    }
    
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`

const MenuItemStyled = styled.a`
    text-decoration: none;
    font-family:' Open Sans',sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    text-align: left;
    color: rgba(101, 103, 144, 1);
    transition: 0.3s ease-in-out;
    
    &:hover{
        cursor: pointer;
    }
`

function FooterMenu({title,items,...rest}) {
    return (
        <FooterMenuStyled {...rest}>
            <h3>{title}</h3>
            <ul>
                {items.map(({link,text}) => (
                    <li key={link}>
                        <MenuItemStyled href={link}>{text}</MenuItemStyled>
                    </li>
                ))}
            </ul>
        </FooterMenuStyled>
    );
}

FooterMenu.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }))
};

export default FooterMenu;