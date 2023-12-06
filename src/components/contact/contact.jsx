import Title from "../title/title";
import { CircleLeft, CircleRight, Component, Container, Text, TextLink } from "./contact.style";

const Contact = () => {
    return (
        <Component id="contact">
            <Container>
                <Title text={'Contact'} />
                <Text>Feel free to taking touch by the process you prefer. <br />Here you find differents way to do it.</Text>
                <TextLink href="tel:+33625900155">06.25.90.01.55</TextLink>
                <TextLink href="mailto:william.mibelli@gmail.com">william.mibelli@gmail.com</TextLink>
                <Text>You prefer Chatting ?</Text>
                <TextLink href="https://master--whatsapp-clone-wm.netlify.app" target="_blank">Come to try my chat application !</TextLink>
            </Container>
            <CircleLeft data-aos='fade-right'/>
            <CircleRight data-aos='fade-left'/>
        </Component>
    )
}

export default Contact