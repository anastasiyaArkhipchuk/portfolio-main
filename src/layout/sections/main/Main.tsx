import {RightMenu} from "../rightMenu/RightMenu";
import {LeftMenu} from "../left-menu/LeftMenu";
import {MainMenu} from "../main-menu/MainMenu";
import {Services} from "../services/Services";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <RightMenu/>
            <LeftMenu/>
            <MainMenu/>
            <Services/>
        </StyledMain>
    )
}

const StyledMain = styled.div`

`
