import Link from "../link/link";
import { Container } from "./link-container.style";

const LinkContainer = () => {
    return (
        <Container>
            <Link text={'Home'} destination={'#home'}/>
            <Link text={'About'} destination={'#skills'}/>
            <Link text={'Projects'} destination={'#projects'} />
            <Link text={'Contact'} destination={'#contact'}/>
        </Container>
    )
}

export default LinkContainer