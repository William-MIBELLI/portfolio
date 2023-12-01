import Badge from "../badge/badge";
import Button from "../button/button";
import Title from "../title/title";
import duck from '../../asset/duck.gif'
import { Container, Content, Intro, Presentation, SkillsList, Text, SkillsContent, Component, Duck, CircleRight } from "./skills.style";

const skills = [
    'Javascript',
    'Typescript',
    'CSS',
    'ReactJS',
    'Redux',
    'ExpressJS',
    'HTML',
    'MongoDB',
    'MySQL',
    'NodeJS',
    'SocketIO'
]

const Skills = () => {
    return (
        <Component id="skills">
            <Container>
                <Title text={'About me'}/>
                <Content>
                    <Presentation>
                        <Intro>Hello there</Intro>
                        <Text>
                            I'm William, 35 years old, full stack developper ! My coding journey start 2 years ago with a web developpement graduate formation.<br/><br/>
                            I specialised myself into MERN stack, for being competitive and job-ready for industry.<br/><br/>
                            Take a look around, check my projects, my github, and feel free to contact me for any request, it will be a pleasure to exchange with you.
                        </Text>
                        <Button text={'Projects'} destination={'#projects'}/>
                    </Presentation>
                    <SkillsList>
                        <Intro>My skills</Intro>
                        <SkillsContent>
                            {
                                skills && skills.map(skill => {
                                    return (
                                        <Badge key={Math.random()} text={skill}/>
                                    )
                                })
                            }
                        </SkillsContent>
                    </SkillsList>
                </Content>
            </Container>
            <Duck src={duck} />
            <CircleRight/>
        </Component>
    )
}

export default Skills