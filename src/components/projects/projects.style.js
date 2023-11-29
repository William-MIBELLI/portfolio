import styled from "styled-components";

export const Container = styled.section`
    min-height: 100dvh;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.dark_1};
`