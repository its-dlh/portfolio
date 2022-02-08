import { css, html } from "../html-template-tag";
import { Header } from "./Header";
import { Main } from "./Main";
import { SummarySection } from "./summary-section/SummarySection";

export const Body = () => html`
    ${Header}
    ${Main(
        SummarySection
    )}
`;

export const style = css`
    body {
        font-family: "Raleway", sans-serif;
    }
    
    @media print {
        body {
            display: flex;
            flex-direction: column;
            height: 100vh;
            padding: 0.25in 0.5in 0.5in;
        }
    }
    
    @page {
        margin: 0;
    }
`;