import styled from "styled-components";


export const LeaveInfo = () => {
    return (
        <LeaveInfoBody>
            <h2>Leave us your info</h2>
            <h4>Your Full Name ( Required)</h4>
            <textarea></textarea>
            <h4>Your Email ( Required)</h4>
            <textarea></textarea>
            <h4>Subject</h4>
            <textarea></textarea>
            <h4>Your Message</h4>
            <textarea></textarea>
            <button>Send Message</button>
        </LeaveInfoBody>
    )
}

const LeaveInfoBody = styled.div`
    width: 570px;
    height: 755px;
    background-color: bisque;

`