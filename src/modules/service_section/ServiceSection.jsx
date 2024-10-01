import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle.jsx";
import SectionText from "../../components/SectionText.jsx";
import serviceConfig from "../../serviceConfig.jsx";
import ServiceCard from "../../components/ServiceCard.jsx";
import BackgroundShape from "../../components/BackgroundShape.jsx";
import serviceBgShape from "../../assets/service_rigth_bg.png";

const ServiceSectionContainer = styled.section`
    width: 100%;
    position: relative;
    margin-top: 100px;
    
    .service_card_container{
        max-width: 1400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 25px;
        margin: 60px auto;
    }
`

function ServiceSection(props) {
    return (
        <ServiceSectionContainer>
            <SectionTitle style={{textAlign:"center"}}>Services We Provide</SectionTitle>
            <SectionText style={{textAlign:"center",maxWidth:"850px",margin:"20px auto"}}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,search for lorem ipsum will uncover.</SectionText>
            <div className="service_card_container">
                {serviceConfig.map(({image,title,text}) => (<ServiceCard image={image} title={title} text={text} key={title}/>))}
            </div>
            <BackgroundShape image={serviceBgShape} alt={"Services We Provide"} right={'0px'} top={'-20%'}/>

        </ServiceSectionContainer>
    );
}



export default ServiceSection;