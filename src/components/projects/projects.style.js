import styled from "styled-components";

export const Container = styled.section`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: ${props => props.theme.colors.dark_1}; */}
    background:
    linear-gradient(135deg,#0000 18.75%,${props => props.theme.colors.dark_1} 0 31.25%,#0000 0),
    repeating-linear-gradient(45deg,${props => props.theme.colors.dark_1} -6.25% 6.25%,${props => props.theme.colors.dark_2} 0 18.75%);
    background-size: 70px 70px;
`