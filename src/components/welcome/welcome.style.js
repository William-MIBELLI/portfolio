import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.dark_1};
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NameContainer = styled.div`
    position: relative;
    text-align: center;
    display: flex;
`

export const Name = styled.h2`
    background: -webkit-linear-gradient(45deg, white, ${props => props.theme.colors.dark_4});
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
        right: calc(100% + 15px);
        height: 100%;
        width: 8px;
        background-color: ${(props) => props.theme.colors.purple_2};
    }
    @media only screen and (max-width: 700px){
        font-size: 3.5rem;
    }
`;

export const Description = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const Text = styled.p`
    color: ${props => props.theme.colors.text_2};
    font-size: 0.9rem;
    margin-bottom: 50px;
`
