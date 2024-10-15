import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

export const Services = () => {
    return (<StyledServices>
        <div>
            <h2>My Services</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <Container>
            <div>
                <Icon iconId={"codingSvg"} width={"68px"} height={"68px"} viewBox={"0 0 68 68"}/>
                <h3>Web Development</h3>
                <span>Blog, E-commerce</span>
            </div>
            <div>
                <Icon iconId={"illustrationSvg"} width={"68px"} height={"68px"} viewBox={"0 0 68 68"}/>
                <h3>UI/UX Design</h3>
                <span>Mobile app, website design</span>
            </div>
            <div>
                <Icon iconId={"microphoneSvg"} width={"74px"} height={"74px"} viewBox={"0 0 74 74"}/>
                <h3>Sound Design</h3>
                <span>Voice Over, Beat Making</span>
            </div>
            <div>
                <Icon iconId={"gameDevelopSvg"} width={"74px"} height={"74px"} viewBox={"0 0 74 74"}/>
                <h3>Game Design</h3>
                <span>Character Design, Props & Objects</span>
            </div>
            <div>
                <Icon iconId={"photographerSvg"} width={"78px"} height={"78px"} viewBox={"0 0 78 78"}/>
                <h3>Photography</h3>
                <span>portrait, product photography</span>
            </div>
            <div>
                <h3>Advertising</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                <a href={"#"}>ORDER NOW</a>
            </div>
        </Container>
    </StyledServices>)
}

const StyledServices = styled.div`
    background-color: bisque;
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 970px;
    height: 653px;

`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`