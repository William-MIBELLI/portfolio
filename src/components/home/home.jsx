import NavBar from "../navbar/navbar"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Welcome from "../welcome/welcome"
import { Container } from "./home.style"

const Home = () => {
    return (
        <Container>
            <NavBar/>
            <Welcome />
            <Skills />
            <Projects/>
        </Container>
    )
}

export default Home