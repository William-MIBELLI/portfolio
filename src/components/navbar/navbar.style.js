import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.dark_2};
    backdrop-filter: blur(6px);
    height: 4rem;
    width: 100dvw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Component = styled.nav`
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
`

export const Burger = styled.input`
    --s: 30px; /* control the size */
    --c: ${props => props.theme.colors.light_1}; /* the color */

    height: var(--s);
    aspect-ratio: 1;
    border: none;
    border-inline: calc(var(--s) / 2) solid #0000;
    box-sizing: content-box;
    --_g1: linear-gradient(var(--c) 20%, #0000 0 80%, var(--c) 0) no-repeat
        content-box border-box;
    --_g2: radial-gradient(
            circle closest-side at 50% 12.5%,
            var(--c) 95%,
            #0000
        )
        repeat-y content-box border-box;
    background: var(--_g2) left var(--_p, 0px) top,
        var(--_g1) left calc(var(--s) / 10 + var(--_p, 0px)) top,
        var(--_g2) right var(--_p, 0px) top,
        var(--_g1) right calc(var(--s) / 10 + var(--_p, 0px)) top;
    background-size: 20% 80%, 40% 100%;
    position: relative;
    clip-path: inset(0 25%);
    -webkit-mask: linear-gradient(90deg, #0000, #000 25% 75%, #0000);
    cursor: pointer;
    transition: background-position 0.3s var(--_s, 0.3s),
        clip-path 0s var(--_s, 0.6s);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:before,
    &:after {
        content: "";
        position: absolute;
        border-radius: var(--s);
        inset: 40% 0;
        background: var(--c);
        transition: transform 0.3s calc(0.3s - var(--_s, 0.3s));
    }

    &:checked {
        clip-path: inset(0);
        --_p: calc(-1 * var(--s));
        --_s: 0s;
    }
    &:checked:before {
        transform: rotate(45deg);
    }
    &:checked:after {
        transform: rotate(-45deg);
    }
    &:focus-visible {
        clip-path: none;
        -webkit-mask: none;
        border: none;
        outline: 2px solid var(--c);
        outline-offset: 5px;
    }

    @media only screen and (min-width: 750px){
        display: none;
    }
`;
