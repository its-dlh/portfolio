import { html, css } from '../html-template-tag.js';

import dlhLogo from '../assets/images/dlh.svg';
import { Logo } from './Logo.js';

export const Header = () => html`
    <header id="main-header">
        <!-- <img class="logo" src="${dlhLogo}" alt="dlh"> -->
        ${Logo}
        <h1>David L. Herring</h1>
    </header>
`;

export const style = css`
    #main-header {
        position: relative;
        padding: 1rem;
        text-align: center;
        
        h1 {
            font-size: 2rem;
            font-weight: 800;
            text-transform: uppercase;
            text-align: center;
        }
        
        .dlh-logo {
            display: inline-block;
            height: 2rem;
            
            @media (--sm) {
                position: absolute;
                left: 1rem;
                top: 1rem;
            }
            
            @media print {
                position: absolute;
                left: 1rem;
                top: 1rem;
            }
        }
    }
`;