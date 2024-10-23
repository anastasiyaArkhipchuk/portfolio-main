import photo from "../../../assets/image/photo.webp";
import styled from "styled-components";
import {Photo} from "../../../components/Photo/Photo";

export const MainMenu = () => {
    return (
        <StyledMainMenu>
            <div>
                <h1>
                    I’m Rayan Adlrdard Front-end Developer
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <button>HIRE ME</button>
            </div>
            <Photo width={"326"} height={"459"} src={photo}/>
        </StyledMainMenu>
    )
}

const StyledMainMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: bisque;
    margin-bottom: 138px;
    width: 970px;
    height: 467px;
;
`