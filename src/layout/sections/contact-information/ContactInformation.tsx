import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";


export const ContactInformation = () => {
    return (
        <ContactInformationBody>
            <h2>Contact information</h2>
            <Box>
                <Icon iconId={"locationSvg"} width={"18px"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Items>
                    <Item>
                    <h4>Country:</h4>
                    <h4>City:</h4>
                    <h4>Streat:</h4>
                </Item>
                    <Item>
                        <span>Bangladesh</span>
                        <span>Dhaka</span>
                        <span>35 vhatara, Badda</span>
                    </Item>
                </Items>
            </Box>
            <Box>
                <Icon iconId={"mailSvg"} width={"18px"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Items>
                    <Item>
                        <h4>Email:</h4>
                        <h4>Skype:</h4>
                        <h4>Telegram:</h4>
                    </Item>
                    <Item>
                        <span>youremail@gmail.com</span>
                        <span>@yourusername</span>
                        <span>@yourusername</span>
                    </Item>
                </Items>
            </Box>
            <Box>
                <Icon iconId={"mobileSvg"} width={"18px"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Items>
                    <Item>
                        <h4>Support services:</h4>
                        <h4>Office:</h4>
                        <h4>Personal:</h4>
                    </Item>
                    <Item>
                        <span>15369</span>
                        <span>+58 (021)356 587 235</span>
                        <span>+58 (021)356 587 235</span>
                    </Item>
                </Items>
            </Box>
        </ContactInformationBody>
    )
}

const ContactInformationBody = styled.div`
    width: 370px;
    height: 756px;
    background-color: bisque;

`

const Box = styled.div`
    width: 370px;
    height: 210px;
    background-color: aliceblue;

`

const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    
`