import { css, html } from "../html-template-tag";

export const Main = (...children) => html`
    <main>
        ${children}
    </main>
`;

export const style = css`
    @media print {
        main {
            display: flex;
            flex: 1 1 auto;
        }
    }
`;