import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.dark_3};
    text-align: center;
    padding: 0.5rem 1.5rem;
    margin: 10px;
    border-radius: 5px;
    color: ${props => props.theme.colors.text_2};
`