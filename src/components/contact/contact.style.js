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

    @media only screen and (max-width: 600px){
        width: 400px;
        height: 400px;
        -webkit-clip-path: circle(50% at 0 100%);
        clip-path: circle(50% at 0 100%);
        bottom: 0;
        top: calc(100% - 400px);
    }
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

    @media only screen and (max-width: 600px){
        width: 600px;
        height: 600px;
    }
`;

export const Text = styled.p`
    color: ${props => props.theme.colors.text_1}
`

export const TextLink = styled.a`
    display: block;
    color: ${props => props.theme.colors.purple_2};
    font-weight: bolder;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: ${props => props.theme.colors.purple_1};
    }

    &:visited{
        color: ${props => props.theme.colors.purple_2};
    }
`