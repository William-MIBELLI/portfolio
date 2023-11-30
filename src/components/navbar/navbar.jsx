import { createContext, useRef, useState } from "react";
import Brand from "./brand/brand";
import LinkContainer from "./link-container/link-container";
import { Container, Burger, Component } from "./navbar.style";

export const NavbarContext = createContext()

const NavBar = () => {

    const [display, setDisplay] = useState(false)
    const burgerRef = useRef()

    const onBurgerClick = () => {
        setDisplay(previous => !previous)
    }

    return (
        <NavbarContext.Provider value={ { burgerRef }}>
            <Component>
                <Container>
                    <Brand />
                    <LinkContainer />
                    <Burger ref={burgerRef} type='checkbox' onClick={onBurgerClick}/>
                </Container> 
                {
                    display && (
                        <LinkContainer vertical={true}/>
                    )
                }
            </Component>
        </NavbarContext.Provider>
    )
};

export default NavBar;
