import { Container } from "./link.style";

const Link = ({ text, destination }) => {
    return (
        <Container href={destination}>
            {text}
        </Container>
    )
}

export default Link