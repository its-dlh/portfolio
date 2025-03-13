import { html, css } from "../../html-template-tag";

export const SummarySection = (...children) => html`
    <section id="summary-section">
        ${children}
    </section>
`;

export const style = css`
    @media print {
        #summary-section {
            background-color: var(--color-dark-print);
            --color: #fff;
            color: var(--color);
            padding: 1rem;
            flex: 0 0 auto;
            width: 2.5in;
            position: relative;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
        }
    }
`;
