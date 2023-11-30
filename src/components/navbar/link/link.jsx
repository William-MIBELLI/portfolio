import { useContext } from "react";
import { Container } from "./link.style";
import { NavbarContext } from "../navbar";

const Link = ({ text, destination }) => {

    const {  burgerRef } = useContext(NavbarContext);

    return (
        <Container href={destination} onClick={() => burgerRef.current.click()}>
            {text}
        </Container>
    );
};

export default Link;
