import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

export const Navigation = () => {
    return (
        <StyledRightMenu>
            <Switch>
                <Icon iconId={"contrastSvg"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
            </Switch>
            <Menu>
                <Icon iconId={"homeSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"servicesSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"cvSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"portfolioSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"blogSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"contactSvg"} width={"40px"} height={"40px"} viewBox={"0 0 40 40"}/>
            </Menu>
        </StyledRightMenu>
    )
}

const StyledRightMenu = styled.div`
    background-color: bisque;
    width: 108px;
    height: 1315px;
    display: flex;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;

`
const Switch = styled.div`
    
`