
import Button from "../button/button";
import {  ClipPath, Component, Container, Description, Name, NameContainer, Text} from "./welcome.style";

const Welcome = () => {

    const onClickHandler = () => {

    }

    return (
        <Component id="home">
            <Container>
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
            </Container>
        </Component>
    )
}

export default Welcome