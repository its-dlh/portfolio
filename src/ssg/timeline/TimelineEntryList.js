import { html, css } from "../../html-template-tag";

export const TimelineEntryList = /* props => */ (...children) => html`
    <div class="timeline-entry-list">
        <ul class="list">
            ${children.map(item => html`
                <li>${item}</li>
            `)}
        </ul>
    </div>
`;

export const style = css`
    .timeline-entry-list {
        h5 {
            font-size: 1.25em;
            font-weight: 700;
        }
        
        ul {
            margin: 0.25em 0 1em;
            padding: 0 0 0 1.25em;
        }
        
        li {
            margin: 0.5em 0;
        }
    }
    
    @media print {
        /* .timeline-entry-list {
            font-size: 0.9rem;
            font-weight: 500;
        } */
    }
`;