import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    ${({$vertical}) => $vertical && vertical};
    @media only screen and (max-width: 750px){
        display: ${({$vertical}) => $vertical ? '' : 'none'};   
    }
`

const vertical = css`
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme.colors.dark_2};
`
