import {Icon} from "../../../components/icon/Icon";
import {Column, Columns} from "../left-menu/LeftMenu";
import styled from "styled-components";

export const Prise = () => {
    return (
        <StyledPrise>
            <div>
                <h2>Price Plans</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <PriseContainer>
                <PrisePart>
                    <h3>Silver</h3>
                    <h2>$0.00</h2>
                    <span>/Hour</span>
                    <p>For most businesses that want to optimize web queries</p>
                    <Columns>
                        <Column>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                        </Column>
                        <Column>
                            <span>UI Design</span>
                            <span>Web Development</span>
                            <span>Logo Design</span>
                            <span>Seo Optimization</span>
                            <span>WordPress integration</span>
                            <span>5 Websites</span>
                            <span>Unlimited User</span>
                            <span>20 GB Bandwith</span>
                        </Column>
                    </Columns>
                    <button>ORDER NOW</button>
                </PrisePart>
                <PrisePart>
                <span>Most Popular</span>
                    <h3>Goldr</h3>
                    <h2>$50.00</h2>
                    <span>/Hour</span>
                    <p>For most businesses that want to optimize web queries</p>
                    <Columns>
                        <Column>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"closeSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                        </Column>
                        <Column>
                            <span>UI Design</span>
                            <span>Web Development</span>
                            <span>Logo Design</span>
                            <span>Seo Optimization</span>
                            <span>WordPress integration</span>
                            <span>5 Websites</span>
                            <span>Unlimited User</span>
                            <span>20 GB Bandwith</span>
                        </Column>
                    </Columns>
                    <button>ORDER NOW</button>
                </PrisePart>
                <PrisePart>
                <h3>Dimondr</h3>
                    <h2>$80.00</h2>
                    <span>/Hour</span>
                    <p>For most businesses that want to optimize web queries</p>
                    <Columns>
                        <Column>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                            <Icon iconId={"checkSvg"} width={"24.9"} height={"24"} viewBox={"0 0 24.9 24"}/>
                        </Column>
                        <Column>
                            <span>UI Design</span>
                            <span>Web Development</span>
                            <span>Logo Design</span>
                            <span>Seo Optimization</span>
                            <span>WordPress integration</span>
                            <span>5 Websites</span>
                            <span>Unlimited User</span>
                            <span>20 GB Bandwith</span>
                        </Column>
                    </Columns>
                    <button>ORDER NOW</button>
                </PrisePart>
            </PriseContainer>
        </StyledPrise>
    )
}

const StyledPrise = styled.div`
    background-color: bisque;
    width: 970px;
    height: 793px;

`
const PriseContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const PrisePart = styled.div`
    width: 308px;
    height: 609px;

`