import { html, css } from "../../html-template-tag";

export const TimelineSection = (...children) => html`
    <section id="timeline-section">
        ${children}
    </section>
`;

export const style = css`
    #timeline-section {
        margin-bottom: 1.5rem;
        
        h2 {
            font-size: 1.5em;
            font-weight: 800;
            border-bottom: 0.125em solid var(--color);
            text-transform: uppercase;
            margin-bottom: 0.5em;
        }

        h2:not(:first-child) {
            margin-top: 1em;
        }
    }
    
    @media print {
        #timeline-section {
            --color: #000;
            color: var(--color);
            padding-left: 1.5rem;
            flex: 1 0 0;
        }
    }
`;
