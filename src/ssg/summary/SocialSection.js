import { html, css } from "../../html-template-tag";
import emailIcon from "@/assets/images/email.svg";
import twitterIcon from "@/assets/images/twitter-white.svg";
import linkedInIcon from "@/assets/images/linkedin.svg?url";

export const SocialSection = () => html`
    <section id="social-section">
        <ul>
            <li>
                <a class="social-link" href="mailto:davidlherring@gmail.com" target="_blank">
                    <img class="icon" src="${emailIcon}" alt="Email">
                    davidlherring@gmail.com
                </a>
            </li>
            
            <li>
                <a class="social-link" href="https://twitter.com/DavidLHerring" target="_blank">
                    <img class="icon" src="${twitterIcon}" alt="Twitter">
                    @DavidLHerring
                </a>
            </li>
            
            <li>
                <a class="social-link" href="https://www.linkedin.com/in/davidlherring/" target="_blank">
                    <img class="icon" src="${linkedInIcon}" alt="LinkedIn">
                    LinkedIn
                </a>
            </li>
        </ul>
    </section>
`;

export const style = css`
    #social-section {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        background-color: var(--color-grey);
        
        .social-link {
            display: block;
            padding: 0.5em 0;
            vertical-align: middle;
            text-decoration: none;
            font-weight: 600;
            color: inherit;
        }
        
        .icon {
            width: 1.25em;
            margin-right: 0.25em;
            margin-top: -0.25em;
            display: inline-block;
            vertical-align: middle;
        }
    }

    @media print {
        
    }
`;