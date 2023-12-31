import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.dark_3};
    text-align: center;
    padding: 0.5rem 1.5rem;
    margin: 3px;
    border-radius: 5px;
    font-weight: bold;
    color: ${props => props.theme.colors.text_1};

    @media only screen and (max-width: 400px){
        padding: 0.3rem 1rem;
    }
`