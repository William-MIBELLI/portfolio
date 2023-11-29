import Brand from "./brand/brand";
import LinkContainer from "./link-container/link-container";
import { Container } from "./navbar.style";

const NavBar = () => {
    return <Container>
        <Brand />
        <LinkContainer/>
    </Container>;
};

export default NavBar;
