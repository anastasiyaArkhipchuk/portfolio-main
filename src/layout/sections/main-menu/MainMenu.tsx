import styled from "styled-components";
import photo from "../../../assets/image/photo.webp"

export const MainMenu = () => {
    return (
        <div>
            <Photo src={photo}/>
        </div>
    )
}

const Photo = styled.img`
    width: 150px;
    height: 150px;
`