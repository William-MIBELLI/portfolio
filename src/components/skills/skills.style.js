import styled from "styled-components";

export const Component = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.dark_2};
    ${'' /* background:
    linear-gradient(135deg,#0000 18.75%,${props => props.theme.colors.dark_1} 0 31.25%,#0000 0),
    repeating-linear-gradient(45deg,${props => props.theme.colors.dark_1} -6.25% 6.25%,${props => props.theme.colors.dark_2} 0 18.75%);
    background-size: 70px 70px; */}
    background:
    linear-gradient(135deg,${props => props.theme.colors.dark_2} 18.75%,${props => props.theme.colors.dark_1} 0 31.25%,${props => props.theme.colors.dark_2} 0),
    repeating-linear-gradient(45deg,#5E412F -6.25% 6.25%,#FCEBB6 0 18.75%);
    z-index: 10;
    position: relative;
`;

export const Container = styled.section`
    max-width: 1300px;
    width: 80%;
    margin: 0 auto;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1100px) {
        width: 90%;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 500px;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > div {
            width: 100%;
            align-items: center;
        }

        p {
            margin: 3rem 0;
        }
    }
`;

export const Presentation = styled.div`
    color: white;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Intro = styled.h3`
    font-family: "Montserrat";
    color: ${(props) => props.theme.colors.purple_2};
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1rem;
    font-family: "Open sans";
    color: ${(props) => props.theme.colors.text_2};
    margin: 0;
    text-align: justify;
`;

export const SkillsList = styled.div`
    color: white;
    width: 40%;
`;

export const SkillsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: center;
    
`;

export const Duck = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 120px;
    bottom: -20px;

    @media only screen and (max-width: 600px){
        right: -15px;
    }
`


