import { html, css } from "../html-template-tag";


export const Logo = () => html`
    <!-- I had a version of my logo that I've cobbled together for social media, but
         I figured this would look better if I just typed up an SVG. -->
    <svg class="dlh-logo" viewBox="0 0 145 100" xmlns="http://www.w3.org/2000/svg">
        <!-- d -->
        <polygon
            class="letter letter-d"
            points="55,0 55,100 0,100 0,50 35,50 35,70 20,70 20,80 35,80 35,0"
        />
        
        <!-- L -->
        <polygon
            class="letter letter-l"
            points="20,0 20,80 50,80 50,100 0,100 0,0"
        />
        
        <!-- h -->
        <polygon
            class="letter letter-h"
            points="20,0 20,50 50,50 50,100 30,100 30,70 0,70 0,0"
        />
    </svg>
`;

export const style = css`
    .dlh-logo {
        .letter {
            fill: #000000;
        }
        
        .letter-l {
            transform: translate(65px, 0);
        }
        
        .letter-h {
            transform: translate(95px, 0);
        }
    }
`;
