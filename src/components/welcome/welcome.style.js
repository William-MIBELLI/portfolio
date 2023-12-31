import styled from "styled-components";
import Pixel from "../../svg/pixel";

export const Component = styled.section`
    background-color: ${(props) => props.theme.colors.dark_1};
    height: 100dvh;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const NameContainer = styled.div`
    position: relative;
    text-align: center;
    display: flex;
`;

export const Name = styled.h2`
    background: -webkit-linear-gradient(
        45deg,
        white,
        ${(props) => props.theme.colors.dark_4}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Press Start 2P";
    font-weight: normal;
    font-size: 5.5rem;
    margin: 0;
    padding: 0;

    &::before {
        content: "";
        position: absolute;
        left: -20px;
        height: 100%;
        width: 8px;
        background-color: ${(props) => props.theme.colors.purple_2};
    }
    @media only screen and (max-width: 700px) {
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 450px) {
        font-size: 3rem;
    }
`;

export const Description = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.text_2};
    font-size: 0.9rem;
    margin-bottom: 50px;
`;

export const ClipPath = styled.div`
    width: 60dvw;
    height: 60dvw;
    background: ${(props) => props.theme.colors.dark_2};
    z-index: -100;
    position: absolute;
    top: 0;
    right: 0;
    clip-path: circle(86.3% at 99% 2%);

    @media only screen and (max-width: 1000px) {
        clip-path: circle(100% at 99% 2%);
    }

    @media only screen and (max-width: 750px) {
        width: 100dvw;
        height: 100dvh;
        clip-path: circle(100% at 99% 2%);
    }
`;

export const CircleLeft = styled.div`
    width: 700px;
    height: 700px;
    ${'' /* -webkit-clip-path: circle(49.1% at 0 100%); */}
    clip-path: circle(49.1% at 0 100%);
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.dark_5};
    z-index: -500;
`;
