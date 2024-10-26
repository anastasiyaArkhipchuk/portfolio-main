import {Photo} from "../../../components/photo/Photo";
import photo1 from "../../../assets/image/portfolio9.webp";
import photo2 from "../../../assets/image/portfolio8.webp";
import photo3 from "../../../assets/image/portfolio7.webp";
import photo4 from "../../../assets/image/portfolio6.webp";
import photo5 from "../../../assets/image/portfolio5.webp";
import photo6 from "../../../assets/image/portfolio4.webp";
import photo7 from "../../../assets/image/portfolio3.webp";
import photo8 from "../../../assets/image/portfolio2.webp";
import photo9 from "../../../assets/image/portfolio1.webp";
import styled from "styled-components";

export const Portfolio = () => {
    return (
        <PortfolioBody>
            <h2>Portfolio</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <Categories>
                    <h4>All categories</h4>
                    <h4>UI Design</h4>
                    <h4>Web Templates</h4>
                    <h4>Logo</h4>
                    <h4>Branding</h4>
                </Categories>
                <Image>
                    <Photo src={photo1} width={"310"} height={"300"}/>
                    <Photo src={photo2} width={"310"} height={"300"}/>
                    <Photo src={photo3} width={"310"} height={"300"}/>
                    <Photo src={photo4} width={"310"} height={"300"}/>
                    <Photo src={photo5} width={"310"} height={"300"}/>
                    <Photo src={photo6} width={"310"} height={"300"}/>
                    <Photo src={photo7} width={"310"} height={"300"}/>
                    <Photo src={photo8} width={"310"} height={"300"}/>
                    <Photo src={photo9} width={"310"} height={"300"}/>
                </Image>
        </PortfolioBody>
    )
}

const PortfolioBody = styled.div`
    width: 970px;
    height: 1195px;
    background-color: bisque;
`
const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    justify-items: start;
`
const Image = styled.div`
//display: flex;
//    flex-wrap: wrap;
//    flex-direction: row;
//    gap: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 20px;
`