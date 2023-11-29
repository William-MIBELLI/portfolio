import { Capture, Container, Description, Name, Text } from "./project.style";
import capture from '../../asset/capture_whatsup.png'
import Button from "../button/button";

const Project = ({ project }) => {

    const { name, description, imgUrl } = project

    return (
        <Container>
            <Capture src={capture} />
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