import { html, css } from '../../../lib/html-template-tag.js';

export const Header = (_props, _children) => html`
    <header>
        <h1>Hello DLH!!</h1>
    </header>
`;

export const style = css`
    h1 {
        color: green;
    }
`;