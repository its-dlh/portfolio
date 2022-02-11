import { html, css } from "../../html-template-tag";

export const SummaryList = props => (...children) => html`
    <div class="summary-list">
        <h2>${props.title}</h2>
        
        <ul class="list">
            ${children.map(item => html`
                <li>${item}</li>
            `)}
        </ul>
    </div>
`;

export const style = css`
    .summary-list {
        h2 {
            font-size: 1.25em;
            font-weight: 800;
            border-bottom: 0.125em solid var(--color);
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
        .summary-list {
            font-size: 0.9rem;
            font-weight: 500;
        }
    }
`;