import styled from "styled-components";

export const Component = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.dark_2};
`

export const Container = styled.section`
    max-width: 1300px;
    width: 80%;
    margin: 0 auto;
    min-height: 100dvh;
    background-color: ${props => props.theme.colors.dark_2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1100px){
        width: 90%;
    }

`

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 500px;

    @media only screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > div{
            width: 100%;
            align-items: center;
        }

        p {
            margin: 3rem 0;
        }
    }

`

export const Presentation = styled.div`
    color: white;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Intro = styled.h3`
    font-family: 'Montserrat';
    color: ${props => props.theme.colors.dark_4};
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 1rem;
    font-family: 'Open sans';
    color: ${props => props.theme.colors.text_2};
    margin: 0;
    text-align: justify;
`

export const SkillsList = styled.div`
    color: white;
    width: 40%;
`

export const SkillsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
`

