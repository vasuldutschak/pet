import PropTypes from 'prop-types';
import styled from 'styled-components'
import linksConfig from '../../linksConfig.jsx'
import IconLink from "../../components/IconLink.jsx";
import footerMenuConfig from "../../footeMenuConfig.jsx";
import FooterMenu from "../../components/FooterMenu.jsx";
import Logo from "../../components/Logo.jsx";

const FooterStyled = styled.footer`
    width: 100%;
    position: relative;
    z-index: 100;
    margin-top: 100px;
    margin-bottom: 20px;
`
const ContentContainer = styled.section`
    max-width: 1400px;
    width: 100%;
    position: relative;
    z-index: 1000;
    margin: 0 auto;
    display: flex;
    align-items: start;
    justify-content: space-between;

    .footer_menu_container {
        display: flex;
        justify-content: space-between;
        flex: 1;
    }

    .logo_container {
        min-width: 300px;

        .all_rights_reserved {
            margin-top: 10px;
            font-family: 'Open Sans',sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 12px;
            text-align: left;
            color: rgba(101, 103, 144, 1)
        }
    }
`

const SocialIconsContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 10px;
    margin-top: 10px;
`


function Footer(props) {

    return (
        <FooterStyled>
            <ContentContainer>
                <div className="logo_container">
                    <Logo/>
                    <div className="all_rights_reserved">
                        All rights reserved. 2020
                    </div>
                </div>
                <div className="footer_menu_container">
                    {footerMenuConfig.map(({ title, items }, index) => (
                        <div key={index}>
                            <FooterMenu items={items} title={title} />

                            {/* Якщо це останній елемент масиву, рендеримо іконки */}
                            {index === footerMenuConfig.length - 1 && (
                                <SocialIconsContainer>
                                    {linksConfig.map(({ link, icon: IconComponent }) => (
                                        <IconLink link={link} icon={IconComponent} key={link} size={20} />
                                    ))}
                                </SocialIconsContainer>
                            )}
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </FooterStyled>
    );
};

Footer.propTypes = {};

export default Footer;