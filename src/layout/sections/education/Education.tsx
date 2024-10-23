import styled from "styled-components";

export const Education = () => {
    return (
        <EducationBody>
            <h2>Education</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <EducationSection>
                <Columns>
                    <div>
                        <h4>University of Toronto</h4>
                        <div>
                            <span>Student</span>
                            <span>Jan 1016 - Dec 2021</span>
                        </div>
                    </div>
                    <div>
                        <h4>Certificate of web training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                    </div>
                </Columns>
                <Columns>
                    <div>
                        <h4>Programming Course</h4>
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
            </EducationSection>
        </EducationBody>
    )
}

const EducationBody = styled.div`
    width: 970px;
    height: 815px;
    background-color: bisque;
`
const EducationSection = styled.div`
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
