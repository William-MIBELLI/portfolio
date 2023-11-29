import Link from "../link/link";
import { Container } from "./link-container.style";

const LinkContainer = () => {
    return (
        <Container>
            <Link text={'Home'}/>
            <Link text={'About'}/>
            <Link text={'Projects'}/>
            <Link text={'Contact'}/>
        </Container>
    )
}

export default LinkContainer