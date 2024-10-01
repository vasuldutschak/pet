import Logo from "../../components/Logo.jsx";
import HeaderMenu from "../header_menu/HeaderMenu.jsx";
import menuConfig from "../../menuConfig.jsx";
import ButtonBlue from "../../components/ButtonBlue.jsx";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 15px auto 10px;
`

function Header(props) {
    return (
        <StyledHeader>
            <Logo/>
            <HeaderMenu items={menuConfig}/>
            <ButtonBlue label={'Get Appointment'} link={'appointment'}/>
        </StyledHeader>
    );
}

export default Header;