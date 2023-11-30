import { Base } from "./button.style";

const Button = ({ text, destination }) => {
    return (
        <Base href={destination}>{text}</Base>
    )
}

export default Button