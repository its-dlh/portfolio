import { html, css } from "../html-template-tag";


export const LogoFull = () => html`
    <svg class="dlh-logo-full" viewBox="0 0 1500 130" xmlns="http://www.w3.org/2000/svg">
        <g class="group-david">
            <!-- d -->
            <polygon
                class="letter letter-d"
                points="55,0 55,100 0,100 0,50 35,50 35,70 20,70 20,80 35,80 35,0"
            />
            
            <!-- a -->
            <polygon
                class="letter letter-a"
                points="50,50 0,50 0,100 50,100 50,45 30,45 30,80 20,80 20,70 50,70"
            />
            
            <!-- v -->
            <!-- <polygon
                class="letter letter-v"
                points="0,50 0,90 10,90 10,100 40,100 40,90 50,90 50,50 30,50 30,80 20,80 20,50"
            /> -->
            
            <!-- v -->
            <polygon
                class="letter letter-v"
                points="0,50 0,80 20,100 30,100 50,80 50,50 30,50 30,75 25,80 20,75 20,50"
            />
            
            <!-- i -->
            <polygon
                class="letter letter-i"
                points="0,50 0,100 20,100 20,50"
            />
            
            <!-- d -->
            <polygon
                class="letter letter-d"
                points="55,0 55,100 0,100 0,50 35,50 35,70 20,70 20,80 35,80 35,0"
            />
        </g>
        
        <g class="group-l">
            <!-- L -->
            <polygon
                class="letter letter-l"
                points="20,0 20,80 50,80 50,100 0,100 0,0"
            />
            
            <rect class="letter dot" x="0" y="80" width="20" height="20"/>
        </g>
        
        <!-- herring group -->
        <g class="group-herring">
            <!-- h -->
            <polygon
                class="letter letter-h"
                points="20,0 20,50 50,50 50,100 30,100 30,70 0,70 0,0"
            />
            
            <!-- e -->
            <!-- <polygon
                class="letter letter-e"
                points="50,80 50,50 0,50 0,100 50,100 50,85 15,85 15,65 35,65 35,80"
            /> -->
            <g class="letter letter-e">
                <rect x="0" y="50" width="40" height="20"/>
                <rect x="0" y="80" width="40" height="20"/>
            </g>
            
            <!-- r -->
            <polygon
                class="letter letter-r"
                points="40,50 0,50 0,100 20,100 20,70 40,70"
            />
            
            <!-- r -->
            <polygon
                class="letter letter-r"
                points="40,50 0,50 0,100 20,100 20,70 40,70"
            />
            
            <!-- i -->
            <polygon
                class="letter letter-i"
                points="0,50 0,100 20,100 20,50"
            />
            
            <!-- n -->
            <polygon
                class="letter letter-n"
                points="0,100 0,50 50,50 50,100 30,100 30,70 20,70 20,100"
            />
            
            <!-- g -->
            <polygon
                class="letter letter-g"
                points="50,100 0,100 0,50 50,50 50,130 10,130 10,110 30,110 30,70 20,70 20,80 50,80"
            />
        </g>
    </svg>
`;

export const style = css`
    .dlh-logo-full {
        .letter {
            fill: #000000;
        }
        
        .group-david {
            .letter-a {
                transform: translate(65px, 0);
            }
            
            .letter-v {
                transform: translate(125px, 0);
            }
            
            .letter-i {
                transform: translate(185px, 0);
            }
            
            .letter-d:last-child {
                transform: translate(215px, 0);
            }
        }
        
        .group-l {
            transform: translate(300px, 0);
            
            .dot {
                transform: translate(70px, 0);
                fill: #000000;
            }
        }
        
        .group-herring {
            transform: translate(370px, 0);
            
            .letter-e {
                transform: translate(60px);
            }
            
            .letter-r {
                transform: translate(110px);
            }
            
            .letter-r + .letter-r {
                transform: translate(160px);
            }
            
            .letter-i {
                transform: translate(210px, 0);
            }
            
            .letter-n {
                transform: translate(240px, 0);
            }
            
            .letter-g {
                transform: translate(300px, 0);
            }
        }
    }
    
    @media screen {
        .dlh-logo-full {
            .letter-d:first-child {
                transform: translate(0, 0);
            }
        }
    }
`;
