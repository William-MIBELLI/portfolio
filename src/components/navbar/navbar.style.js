import styled from "styled-components";

export const Container = styled.nav`
    background-color: ${props => props.theme.colors.dark_3};
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`

export const LinksContainer = styled.div`
    background: green;
`

export const Brand = styled.div`
    background: red;
`