import styled from "styled-components";

export const Component = styled.section`
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.dark_1};
    position: relative;
    overflow: hidden;
`;

export const Container = styled.div`
    z-index: 1000;
`;

export const CircleLeft = styled.div`
    width: 1000px;
    height: 1000px;
    -webkit-clip-path: circle(71.7% at 0 0);
    clip-path: circle(71.7% at 0 0);
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.colors.dark_2};
`;

export const CircleRight = styled.div`
    width: 1000px;
    height: 1000px;
    -webkit-clip-path: circle(56.7% at 100% 43%);
    clip-path: circle(56.7% at 100% 43%);
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${props => props.theme.colors.dark_5};
`;

export const Text = styled.p`
    color: ${props => props.theme.colors.text_1}
`