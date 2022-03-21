import { html, css } from "../../html-template-tag";

export const TimelineEntry = props => (...children) => html`
    <article class="timeline-entry ${props.class ?? ''}">
        <header>
            <h3 class="entry-title">
                ${props.title}
            </h3>
            <h4 class="entry-subtitle">
                ${props.start && html`
                    <span class="entry-years">
                        ${props.start} &ndash; ${props.end ?? 'Present'} |
                    </span>
                `}
                
                ${props.subtitle}
            </h4>
        </header>
        
        ${children}
    </article>
`;

export const style = css`
    .timeline-entry {
        .entry-title {
            font-size: 1.25em;
            font-weight: 800;
        }
        
        .entry-subtitle {
            font-size: 1em;
            font-weight: 700;
            font-style: italic;
            margin-top: 0.25em;
        }
        
        .entry-years {
            font-size: 1.25em;
            font-weight: 400;
            font-style: normal;
        }
        
        p {
            margin: 0.75em 0;
        }
        
        h5 {
            font-size: 1em;
            font-weight: 400;
            text-decoration: underline;
        }
    }
    
    @media print {
        .timeline-entry {
        }
    }
`;