import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    max-width: 100dvw;
    background-color: ${props => props.theme.colors.dark_1};
    overflow-x: clip;
`