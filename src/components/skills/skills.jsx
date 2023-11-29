import Badge from "../badge/badge";
import Button from "../button/button";
import Title from "../title/title";
import { Container, Content, Intro, Presentation, SkillsList, Text, SkillsContent, Component } from "./skills.style";

const skills = [
    'Javascript',
    'ReactJS',
    'Redux',
    'ExpressJS',
    'Typescript',
    'HTML',
    'CSS',
    'MongoDB',
    'MySQL',
    'NodeJS'
]

const Skills = () => {
    return (
        <Component>
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
                        <Button text={'Projects'}/>
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
        </Component>
    )
}

export default Skills