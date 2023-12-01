
import { useRef } from "react";
import Button from "../button/button";
import {  CircleLeft, ClipPath, Component, Container, Description, Name, NameContainer, Text} from "./welcome.style";

const Welcome = () => {

    const endRef = useRef()

    const onScrollHandler = event => {
        console.log('scroll : ', event.target)
    }

    return (
        <Component id="home" ref={endRef} onScroll={onScrollHandler}>
            <Container >
                <NameContainer>
                    <Name>
                        William MIBELLI
                    </Name>
                </NameContainer>
                <Description>
                    <Text>
                        As web developper, you can find out my skills ans differents projects.
                    </Text>
                    <Button text={'Dive in'} destination={'#skills'}/>
                </Description>
                <ClipPath />
                <CircleLeft/>
            </Container>
            <div></div>
        </Component>
    )
}

export default Welcome