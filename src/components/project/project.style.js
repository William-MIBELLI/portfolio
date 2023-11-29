import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1300px;
    width: 80%;
    position: relative;
    margin-bottom: 60px;

    @media only screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            width: 100%;
        }

        img{
            width: 60%;
        }
    }

    &::after{
        content:'';
        height: 3px;
        width: 100%;
        position: absolute;
        background: ${props => props.theme.colors.purple_1};
        top: calc(100% + 30px);
    }
`

export const Capture = styled.img`
    width: 30%;
`

export const Description = styled.div`
    width: 50%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

`

export const Name = styled.h3`
    color: ${props => props.theme.colors.dark_4};
    font-size: 1.5rem;
    margin: 0;
    font-weight: bolder;
`

export const Text = styled.p`
    color: ${props => props.theme.colors.text_2};
`