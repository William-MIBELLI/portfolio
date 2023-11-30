import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    a{
        text-decoration: none;
    }
`

export const Name = styled.p`
    margin-left: 1rem;
    color: ${props => props.theme.colors.purple_2};
    font-family: 'Press Start 2P';
    font-size: 1.5rem;
    letter-spacing: -0.6rem;
`