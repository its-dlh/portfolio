import { html, css } from "../../html-template-tag";

export const SummaryContent = props => (...children) => html`
    <div class="summary-content ${props.class ?? ''}">
        <h2>${props.title}</h2>
        
        <div class="summary-inner-content">
            ${children}
        </div>
    </div>
`;

export const style = css`
    .summary-content {
        h2 {
            font-size: 1.25em;
            font-weight: 800;
            border-bottom: 0.125em solid var(--color);
            text-transform: uppercase;
        }
        
        p {
            line-height: 1.5;
        }
        
        .summary-inner-content {
            margin: 1em 0 2em;
        }
    }
    
    @media print {
        .summary-content {
            /* font-size: 0.9rem; */
            font-weight: 500;
        }
    }
`;
