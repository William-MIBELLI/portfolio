import styled from "styled-components";

export const Container = styled.a`
    padding: 10px;
    margin: 0 3rem;
    border: none;
    font-weight: light;
    text-decoration: none;
    color: ${props => props.theme.colors.dark_4};
    background-color: transparent;
    font-family: 'Montserrat';
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.purple_2};
    }
`

