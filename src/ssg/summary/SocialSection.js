import { html, css } from "../../html-template-tag";
import twitterLogo from "@/assets/images/twitter-white.svg";

export const SocialSection = () => html`
    <section id="social-section">
        <a class="social-link" href="https://twitter.com/DavidLHerring" target="_blank">
            <img class="icon" src="${twitterLogo}" alt="Twitter">
            @DavidLHerring
        </a>
    </section>
`;

export const style = css`
    #social-section {
        .social-link {
            text-decoration: none;
            color: inherit;
        }
        
        .icon {
            height: 0.75em;
            display: inline-block;
        }
    }

    @media print {
        
    }
`;