import { Capture, Container, Description, Name, Text } from "./project.style";
import Button from "../button/button";
import { Tags } from "../project/project.style";
import Badge from '../badge/badge'

const Project = ({ project, reversed = false }) => {

    const { name, description, imgUrl, tags } = project

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
            <Tags>
                {
                    tags && tags.map(t => {
                        return (
                            <Badge text={t}/>
                        )
                    })
                }
            </Tags>
                <Button text={'Check it'}/>
            </Description>
        </Container>
    )
}

export default Project