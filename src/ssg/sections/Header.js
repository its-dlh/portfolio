import { html, css } from '../../../lib/html-template-tag.js';

import dlhLogo from '../../assets/images/dlh.svg';

export const Header = (_props, _children) => html`
    <header>
        <h1>Hello DLH!!</h1>
        <img class="logo" src="${dlhLogo}" alt="dlh">
    </header>
`;

export const style = css`
    h1 {
        font-weight: 900;
    }
    
    .logo {
        margin: 4rem;
    }
`;