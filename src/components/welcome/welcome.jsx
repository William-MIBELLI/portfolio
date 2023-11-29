
import Button from "../button/button";
import { Container, Description, Name, NameContainer, Text} from "./welcome.style";

const Welcome = () => {
    return (
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
                <Button text={'Dive in'}/>
            </Description>
        </Container>
    )
}

export default Welcome