import { html, css } from "../../html-template-tag";

export const SummarySection = (...children) => html`
    <section id="summary-section">
        ${children}
    </section>
`;

export const style = css`
    @media print {
        #summary-section {
            background-color: var(--color-light-grey);
            padding: 1rem;
            flex: 0 0 auto;
            width: 3in;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
        }
    }
`