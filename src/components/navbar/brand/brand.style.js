import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Pics = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const Name = styled.p`
    margin-left: 15px;
    color: ${props => props.theme.colors.purple_2};
    font-family: 'Press Start 2P';
    font-size: 1.5rem;
    letter-spacing: -0.6rem;
`