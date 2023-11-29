import styled from "styled-components";

export const Base = styled.button`
    padding: 0.9rem 3.5rem;
    font-weight: bold;
    font-family: 'Montserrat';
    border-radius: 0.4rem;
    border: none;
    color: white;
    background-color: ${props => props.theme.colors.purple_3};
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover{
        transform: translateY(-3px);
    }
`