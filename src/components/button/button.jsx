import { Base } from "./button.style";

const Button = ({ text, destination, blank = false }) => {
    return (
        <Base target={blank ? '_blank' : ''} href={destination}>{text}</Base>
    )
}

export default Button