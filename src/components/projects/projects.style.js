import styled from "styled-components";

export const Container = styled.section`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:
    linear-gradient(135deg,#0000 18.75%,${props => props.theme.colors.dark_1} 0 31.25%,#0000 0),
    repeating-linear-gradient(45deg,${props => props.theme.colors.dark_1} -6.25% 6.25%,${props => props.theme.colors.dark_2} 0 18.75%);
    background-size: 70px 70px;
    ${'' /* background-color: ${props => props.theme.colors.purple_4}; */}
`

export const MoreContainer = styled.div`
    max-width: 1300px;
    width: 80%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background: ${props => props.theme.colors.purple_1};
    margin-bottom: 2rem;
`

export const More = styled.p`
    color: ${props => props.theme.colors.light_1};
    font-family: 'Montserrat';
    margin-right: 10px;

`