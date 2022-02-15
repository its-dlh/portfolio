import { html, css } from "../../html-template-tag";

export const TimelineEntry = props => (...children) => html`
    <article class="timeline-entry">
        <header>
            <h3 class="entry-title">
                ${props.title}
            </h3>
            <h4 class="entry-subtitle">
                ${props.subtitle}
                
                <span class="entry-years">
                    ${props.start} &ndash; ${props.end ?? 'Present'}
                </span>
            </h4>
        </header>
        
        ${children}
    </article>
`;

export const style = css`
    @media print {
        .timeline-entry {
        }
    }
`;