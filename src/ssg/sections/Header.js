import { html, css } from '../../../lib/html-template-tag.js';

import dlhLogo from '../../assets/images/dlh.svg';

export const Header = (_props, _children) => html`
    <header id="mainHeader">
        <img class="logo" src="${dlhLogo}" alt="dlh">
        <h1>David L. Herring</h1>
    </header>
`;

export const style = css`
    #mainHeader {
        position: relative;
        padding: 1rem;
        text-align: center;
        
        & h1 {
            font-size: 2rem;
            font-weight: 800;
            text-transform: uppercase;
            text-align: center;
        }
        
        & .logo {
            display: block;
            height: 2rem;
            position: absolute;
            left: 1rem;
            top: 1rem;
        }
    }
`;