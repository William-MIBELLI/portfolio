
import Button from "../button/button";
import {  ClipPath, Component, Container, Description, Name, NameContainer, Text} from "./welcome.style";

const Welcome = () => {

    const onClickHandler = () => {

    }

    return (
        <Component>
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
                    <a href="#skills" behavior='smooth'>
                        <Button text={'Dive in'}/>
                    </a>
                </Description>
                <ClipPath />
            </Container>
        </Component>
    )
}

export default Welcome