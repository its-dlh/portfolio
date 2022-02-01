import { html, css } from '../../../lib/html-template-tag.js';

import dlhLogo from '../../assets/images/dlh.svg';

export const Header = (_props, _children) => html`
    <header>
        <h1>Hello DLH!!</h1>
        <img src="${dlhLogo}">
    </header>
`;

export const style = css`
    h1 {
        color: green;
    }
`;