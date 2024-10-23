import styled from "styled-components";

type PhotoProps = {
    width?: string;
    height?: string;
    objectFit?: string;
}

export const Photo = styled.img<PhotoProps>`
    width: ${props => props.width || "100"};
    height: ${props => props.height || "150"};
    object-fit: ${props => props.objectFit || "cover"};
`