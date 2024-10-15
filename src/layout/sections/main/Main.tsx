import {RightMenu} from "../rightMenu/RightMenu";
import {LeftMenu} from "../left-menu/LeftMenu";
import {MainMenu} from "../main-menu/MainMenu";
import {Services} from "../services/Services";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <LeftMenu/>
            <div>
                <MainMenu/>
                <Services/>
            </div>
            <RightMenu/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
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
