import { Base } from "./button.style";

const Button = ({ text, clickHandler }) => {
    return (
        <Base onClick={clickHandler}>{text}</Base>
    )
}

export default Button