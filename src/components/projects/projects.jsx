import Project from "../project/project";
import Title from "../title/title";
import { Container } from "./projects.style";

const p = {
    name: 'WhatsUP',
    description: 'A what\'s app clone. Fully build with Javascript, from React to NodeJs. Using Real-Time technology like SocketIO & WebRTC.'
}

const Projects = () => {
    return (
        <Container>
            <Title text={'My Projects'} />
            <Project project={p}/>
            <Project project={p}/>
            <Project project={p}/>
        </Container>
    )
}

export default Projects