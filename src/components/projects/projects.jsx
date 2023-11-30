import Project from "../project/project";
import Title from "../title/title";
import { Container } from "./projects.style";
import resto from '../../asset/capture_resto.png'
import shopwear from '../../asset/capture_shopwear.png'
import whatsup from '../../asset/capture_whatsup.png'

const whatsupP = {
    name: 'WhatsUP',
    description: 'A what\'s app clone. Fully build with Javascript, from React to NodeJs. Using Real-Time technology like SocketIO & WebRTC.',
    imgUrl: whatsup
}

const restoP = {
    name: 'Le Quai Antique',
    description: 'Website for a restaurant, with an administrator',
    imgUrl: resto
}

const shopwearP = {
    name: 'ShopWear',
    description: 'Ecommerce application developped with Typescript, React and Firebase.',
    imgUrl: shopwear
}

const Projects = () => {
    return (
        <Container id="projects">
            <Title text={'Projects'} />
            <Project project={whatsupP} />
            <Project project={restoP} reversed={true} />
            <Project project={shopwearP}/>
        </Container>
    )
}

export default Projects