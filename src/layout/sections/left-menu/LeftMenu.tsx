import photo from "../../../assets/image/photo.webp";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Photo} from "../../../components/Photo/Photo";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
        <Photo width={"100"} height={"150"} objectFit={"cover"} src={photo}/>
        <h4>Rayan Adlardard</h4>
        <span>Font-end Developer</span>
        <div>
            <Icon iconId={"facebookSvg"}/>
            <Icon iconId={"instagramSvg"}/>
            <Icon iconId={"twitterSvg"}/>
            <Icon iconId={"linkedinSvg"}/>
            <Icon iconId={"youtubeSvg"}/>
            <Icon iconId={"dribbleSvg"}/>
        </div>
        <Columns>
            <Column>
                <span>Age:</span>
                <span>Residence:</span>
                <span>Freelance:</span>
                <span>Address:</span>
            </Column>
            <Column>
                <span>24</span>
                <span>BD</span>
                <span>Available</span>
                <span>Dhaka,Bangladesh</span>
            </Column>
        </Columns>
        <h4>Languages</h4>
        <Columns>
            <Column>
                <span>Bangla</span>
                <span>English</span>
                <span>Spanish</span>
            </Column>
            <Column>
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
            </Column>
        </Columns>
        <h4>Languages</h4>
        <Columns>
            <Column>
                <span>Html</span>
                <span>CSS</span>
                <span>Js</span>
                <span>PHP</span>
                <span>WordPress</span>
            </Column>
            <Column>
                <span>90%</span>
                <span>85%</span>
                <span>85%</span>
                <span>75%</span>
                <span>85%</span>
            </Column>
        </Columns>
        <h4>Extra Skills</h4>
        <Columns>
            <Column>
                <Icon iconId={"iconsSvg"}/>
                <Icon iconId={"iconsSvg"}/>
                <Icon iconId={"iconsSvg"}/>
                <Icon iconId={"iconsSvg"}/>
            </Column>
            <Column>
                <span>Bootstrap, Materialize</span>
                <span>Stylus, Sass, Less</span>
                <span>Gulp, Webpack, Grunt</span>
                <span>7GIT Knowledge</span>
            </Column>
        </Columns>
        <button>Download cv</button>
    </StyledLeftMenu>
    )
}

const StyledLeftMenu = styled.div`
    width: 305px;
    height: 1315px;
    background-color: bisque;
`

 const Columns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
`