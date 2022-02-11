import { html, css } from '../html-template-tag.js';

import dlhLogo from '../assets/images/dlh.svg';

export const Header = () => html`
    <header id="main-header">
        <img class="logo" src="${dlhLogo}" alt="dlh">
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
        
        .logo {
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