import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    margin-bottom: 4rem;
    margin-top : 6rem;
`

export const Content = styled.h2`
    background: -webkit-linear-gradient(45deg, white, ${props => props.theme.colors.dark_4});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Press Start 2P';
    font-weight: normal;
    font-size: 4rem;
    margin: 0;

    &::before{
        content: '';
        position: absolute;
        left: -25px;
        top: 0;
        width: 10px;
        height: 100%;
        border-radius: 2px;
        background-color: ${props => props.theme.colors.purple_1};
    }

    @media only screen and (max-width: 550px){
        font-size: 3rem;
    }
`