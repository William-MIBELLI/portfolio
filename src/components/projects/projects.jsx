import Project from "../project/project";
import Title from "../title/title";
import { Container, More, MoreContainer } from "./projects.style";
import resto from '../../asset/capture_resto.png'
import shopwear from '../../asset/capture_shopwear.png'
import whatsup from '../../asset/capture_whatsup.png'
import Button from "../button/button";

const whatsupP = {
    name: 'WhatsUP',
    description: 'A what\'s app clone. Fully build with Javascript, from React to NodeJs. Using Real-Time technology as SocketIO & WebRTC. CRUD with MongoDB and Mongoose.',
    imgUrl: whatsup,
    tags: [
        'socketIO',
        'ReactJS',
        'ExpressJS',
        'Redux',
        'MongoDB'
    ],
    linkUrl: 'https://master--whatsapp-clone-wm.netlify.app/login'
}

const restoP = {
    name: 'Le Quai Antique',
    description: 'Website for a restaurant, with an administrator dashboard. CRUD with Firebase.',
    imgUrl: resto,
    tags: [
        'ReactJS',
        'Firebase',
        'Redux'
    ],
    linkUrl: 'https://celebrated-lebkuchen-76024c.netlify.app/'
}

const shopwearP = {
    name: 'ShopWear',
    description: 'Ecommerce application developped with Typescript, React and Firebase.',
    imgUrl: shopwear,
    tags: [
        'Typescript',
        'ReactJS',
        'Redux',
        'Firebase'
    ],
    linkUrl: 'https://cerulean-fenglisu-8d3731.netlify.app/'
}

const Projects = () => {
    return (
        <Container id="projects">
            <Title text={'Projects'} />
            <Project project={whatsupP}/>
            <Project project={restoP} reversed={true} />
            <Project project={shopwearP} />
            <MoreContainer data-aos="fade-left">
                <More>You can find more on my</More>
                <Button text={'Github'} blank={true} destination={'https://github.com/William-MIBELLI?tab=repositories'}/>
            </MoreContainer>
        </Container>
    )
}

export default Projects