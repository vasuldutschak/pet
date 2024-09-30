import styled from "styled-components";
import logo from './../assets/logo.png';

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: fit-content;

    img {
        max-width: 30px;
        width: 100%;
        height: auto;  /* Зберігає пропорції зображення */
        object-fit: contain;  /* Адаптує зображення до розміру контейнера */
    }

    span {
        font-size: 20px;
        line-height: 20px;
        color: rgba(9, 64, 103, 1);
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-style: normal; 
    }
`

function Logo(props) {
    return (
        <LogoContainer>
            <img src={logo} alt='Pet Care'/>
            <span>Pet Care</span>
        </LogoContainer>
    );
}

export default Logo;