import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";

export const Navigation = () => {
    return (
        <Menu>
            <ul>
                <li>
                    <Logo href={"#"} icon={"contrastSvg"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"homeSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"servicesSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"cvSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"portfolioSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"blogSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
                <li>
                    <Logo href={"#"} icon={"contactSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                </li>
            </ul>
        </Menu>
    )
}

const Menu = styled.nav`
    background-color: bisque;
    width: 108px;
    height: 1315px;
    display: flex;
`