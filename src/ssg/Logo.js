import { html, css } from "../html-template-tag";


export const Logo = () => html`
    <!-- I had a version of my logo that I've cobbled together for social media, but
         I figured this would look better if I just typed up an SVG. -->
    <svg class="dlh-logo" width="145" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <!-- d -->
        <polygon
            points="55,0 55,100 0,100 0,50 35,50 35,70 20,70 20,80 35,80 35,0"
            fill="#000000"
        />
        
        <!-- L -->
        <polygon
            points="85,0 85,80 115,80 115,100 65,100 65,0"
            fill="#000000"
        />
        
        <!-- h -->
        <polygon
            points="115,0 115,50 145,50 145,100 125,100 125,70 95,70 95,0"
            fill="#000000"
        />
    </svg>
`;

export const style = css`
    .dlh-logo {
        
    }
`;
