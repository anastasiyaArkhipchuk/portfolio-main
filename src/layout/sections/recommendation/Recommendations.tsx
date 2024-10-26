import {Icon} from "../../../components/icon/Icon";
import recom1 from "../../../assets/image/recome3.webp";
import recom2 from "../../../assets/image/recom2.webp";
import recom3 from "../../../assets/image/recom1.webp";
import {Photo} from "../../../components/photo/Photo";
import styled from "styled-components";

export const Recommendations = () => {
    return (
        <RecommendationsBody>
            <h2>Recommendations</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <CommentBody>
                <DescripctionRecomend>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <h4>Great Quality!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                    <UserStyled>
                        <Photo src={recom1} width={"80"} height={"80"} objectFit={"cover"}/>
                        <div>
                            <h4>James Gouse</h4>
                            <span>Graphic Designer</span>
                        </div>
                    </UserStyled>
                </DescripctionRecomend>
                <DescripctionRecomend>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <h4>Amazing work!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                    <UserStyled>
                        <Photo src={recom2} width={"80"} height={"80"} objectFit={"cover"}/>
                        <div>
                            <h4>Tiana Philips</h4>
                            <span>Photographer</span>
                        </div>
                    </UserStyled>
                </DescripctionRecomend>
                <DescripctionRecomend>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <Icon iconId={"starSvg"} width={"18"} height={"17.4"} viewBox={"0 0 18 17.4"}/>
                    <h4>Great Quality!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                    <UserStyled>
                        <Photo src={recom3} width={"80"} height={"80"} objectFit={"cover"}/>
                        <div>
                            <h4>Talan Westervelt</h4>
                            <span>Business man</span>
                        </div>
                    </UserStyled>
                </DescripctionRecomend>
                <div></div>
                <div></div>
            </CommentBody>

        </RecommendationsBody>
    )
}

const RecommendationsBody = styled.div`
    width: 970px;
    height: 566px;
    background: bisque;
`
const CommentBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;`

const DescripctionRecomend = styled.div`
    width: 310px;
    height: 323px;
`

const UserStyled = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr;
`