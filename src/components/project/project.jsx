import { Capture, Container, Description, Name, Text } from "./project.style";
import Button from "../button/button";

const Project = ({ project, reversed = false }) => {

    const { name, description, imgUrl } = project

    return (
        <Container $reversed={reversed}>
            <Capture src={imgUrl} />
            <Description>
                <Name>
                    {name}
                </Name>
                <Text>
                    {description}
                </Text>
                <Button text={'Check it'}/>
            </Description>
        </Container>
    )
}

export default Project