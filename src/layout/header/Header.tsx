import photo from "../../assets/image/photo.webp";
import styled from "styled-components";
import {Photo} from "../../components/photo/Photo";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <MainTitle>
                    I’m Rayan Adlrdard Front-end Developer
                </MainTitle>
                <MainParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </MainParagraph>
                <Logo href={"#"} icon={"hireMeSvg"} height={"51"} width={"154"} viewBox={"0 0 154 51"}/>
            </div>
            <Photo width={"326"} height={"459"} src={photo}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: bisque;
    margin-bottom: 138px;
    width: 970px;
    height: 467px;
`
const MainTitle = styled.h1`

`

const MainParagraph = styled.p`
    
`

