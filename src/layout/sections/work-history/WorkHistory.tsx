import styled from "styled-components";

export const WorkHistory = () => {
    return (
        <WorkBody>
            <h2>Work History</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <WorkSection>
                <Columns>
                    <div>
                        <h4>Lead Web Designer</h4>
                        <div>
                            <span>Student</span>
                            <span>Jan 1016 - Dec 2021</span>
                        </div>
                    </div>
                    <div>
                        <h4>Junior Web Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                    </div>
                </Columns>
                <Columns>
                    <div>
                        <h4>Senior Web Designer</h4>
                        <div>
                            <span>Student</span>
                            <span>Jan 1016 - Dec 2021</span>
                        </div>
                    </div>
                    <div>
                        <h4>Certificate of web training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc,
                            egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                            fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                    </div>
                </Columns>
                <Columns>
                    <div>
                        <h4>Web Developer Courses</h4>
                        <div>
                            <span>Student</span>
                            <span>Jan 1016 - Dec 2021</span>
                        </div>
                    </div>
                    <div>
                        <h4>Certificate of web training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc,
                            egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                            fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                    </div>
                </Columns>
            </WorkSection>
        </WorkBody>
    )
}

const WorkBody = styled.div`
    width: 970px;
    height: 815px;
    background-color: bisque;
`
const WorkSection = styled.div`
    width: 970px;
    height: 632px;
`
const Columns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 904px;
    height: 150px;
    background-color: aliceblue;

`
