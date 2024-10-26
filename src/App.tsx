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
import {Header} from "./layout/header/Header";
import {Services} from "./layout/sections/services/Services";
import {LeaveInfo} from "./layout/sections/leave-info/LeaveInfo";
import {Map} from "./layout/sections/map/Map";
import {ContactInformation} from "./layout/sections/contact-information/ContactInformation";
import {Navigation} from "./layout/sections/navigation/Navigation";

function App() {
    return (
        <Wrapper>
            <LeftMenu/>
            <MainInfo>
                <Header/>
                <Services/>
                <Prise/>
                <Recommendations/>
                <Education/>
                <WorkHistory/>
                <Portfolio/>
                <Blog/>
                <Info>
                    <LeaveInfo/>
                    <ContactInformation/>
                </Info>
                <Map/>
                <Footer/>
            </MainInfo>
            <Navigation/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
`

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    flex-grow: 1;
`
const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

`

export default App;
