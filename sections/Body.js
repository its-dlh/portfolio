import { css, html } from "../lib/html-template-tag";
import { Header } from "./Header";

export const Body = () => html`
    ${Header}
    <p>More to come!</p>
`;

export const BodyStyles = () => css`
    body {
        font-family: sans-serif;
    }
`;