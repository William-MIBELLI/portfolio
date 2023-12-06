
import { useRef } from "react";
import Button from "../button/button";
import {  CircleLeft, ClipPath, Component, Container, Description, Name, NameContainer, Text} from "./welcome.style";

const Welcome = () => {

    const endRef = useRef()

    const onScrollHandler = event => {
        console.log('scroll : ', event.target)
    }

    return (
        <Component  id="home" ref={endRef} onScroll={onScrollHandler}>
            <Container >
                <NameContainer data-aos="fade-down">
                    <Name>
                        William MIBELLI
                    </Name>
                </NameContainer>
                <Description data-aos="fade-up">
                    <Text>
                        Web developper. Here you can find out my differents skills and bunch of projects.
                    </Text>
                    <Button text={'Dive in'} destination={'#skills'}/>
                </Description>
                <ClipPath data-aos='fade-left'/>
                <CircleLeft data-aos='fade-right'/>
            </Container>
            <div></div>
        </Component>
    )
}

export default Welcome