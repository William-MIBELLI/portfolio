import Title from "../title/title";
import { CircleLeft, CircleRight, Component, Container, Text } from "./contact.style";

const Contact = () => {
    return (
        <Component id="contact">
            <Container>
                <Title text={'Contact'} />
                <Text>Feel free to taking touch by the process you prefer. <br />Here you find differents way to do it.</Text>
                <Text>Phone: 06.25.90.01.55</Text>
                <Text>Mail: william.mibelli@gmail.com</Text>
                <Text>You prefer Chatting ? Come to try my chat application ! </Text>
            </Container>
            <CircleLeft />
            <CircleRight/>
        </Component>
    )
}

export default Contact