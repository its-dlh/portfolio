import { html, css } from "../../html-template-tag";
import { SummaryContent } from "./SummaryContent";

export const SummaryList = props => (...children) => (
    SummaryContent(props)(html`
        <ul class="list summary-list ${props.class ?? ''}">
            ${children.map(item => html`
                <li>${item}</li>
            `)}
        </ul>
    `)
);

export const style = css`
    .summary-list {
        padding: 0 0 0 1.25em;
        margin: 0;
        
        li {
            margin: 0.5em 0;
        }
    }
`;