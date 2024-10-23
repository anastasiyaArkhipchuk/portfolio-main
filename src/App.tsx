import './App.css';
import {Prise} from "./layout/sections/prise/Prise";
import {Education} from "./layout/sections/education/Education";
import {WorkHistory} from "./layout/sections/work-history/WorkHistory";
import {Blog} from "./layout/sections/blog/Blog";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Recommendations} from "./layout/sections/recommendation/Recommendations";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import {LeftMenu} from "./layout/sections/left-menu/LeftMenu";
import {MainMenu} from "./layout/sections/main-menu/MainMenu";
import {Services} from "./layout/sections/services/Services";
import {RightMenu} from "./layout/sections/rightMenu/RightMenu";
import {LeaveInfo} from "./layout/sections/leave-info/LeaveInfo";
import {Map} from "./layout/sections/map/Map";
import {Logo} from "./layout/sections/logo/Logo";
import {ContactInformation} from "./layout/sections/contact-information/ContactInformation";

function App() {
    return (
        <Body>
            <Conteiner>
                <LeftMenu/>
                <div>
                    <MainMenu/>
                    <Services/>
                    <Prise/>
                    <Recommendations/>
                    <Education/>
                    <WorkHistory/>
                    <Portfolio/>
                    <Blog/>
                    <Footer/>
                    <Info>
                        <LeaveInfo/>
                        <ContactInformation/>
                    </Info>
                    <Map/>
                    <Logo/>
                </div>
                <RightMenu/>
            </Conteiner>
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
`
const Conteiner = styled.div`
    display: flex;
    :nth-child(1){
        justify-content: flex-end;
    }
    :nth-child(2){
        align-self: flex-start;
    }
    div{
        flex-wrap: wrap;
        flex-direction: column;
    }
    gap: 30px;
`

const Info = styled.div`
`

export default App;
