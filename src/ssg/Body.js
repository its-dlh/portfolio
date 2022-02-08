import { css, html } from "../html-template-tag";
import { Header } from "./Header";

export const Body = () => html`
    ${Header}
`;

export const style = css`
    body {
        font-family: "Raleway", sans-serif;
    }
`;