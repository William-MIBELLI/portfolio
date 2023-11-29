import { Container, Content } from "./title.style";

const Title = ({ text }) => {
    return <Container>
        <Content>
            {text}
        </Content>
    </Container>
}

export default Title