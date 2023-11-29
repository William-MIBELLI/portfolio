import { Container } from "./link.style";

const Link = ({ text, clickHandler }) => {
    return (
        <Container onClick={clickHandler}>
            {text}
        </Container>
    )
}

export default Link