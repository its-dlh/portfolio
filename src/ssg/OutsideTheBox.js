import { html, css } from "../../html-template-tag";

export const OutsideTheBox = () => html`
    <section id="outside-the-box" class="hide-for-print">
        <div class="box">
            <div class="box-side box-back"></div>
            <div class="box-side box-top"></div>
            <div class="box-side box-bottom"></div>
            <div class="box-side box-left"></div>
            <div class="box-side box-right"></div>
        </div>
    </section>
`;

export const style = css`
    @media screen {
        #outside-the-box {
            --box-depth: 8rem;
            --box-height: 8rem;
            --box-width: min(20rem, 100%);
            
            .box {
                position: relative;
                width: var(--box-width);
                height: var(--box-height);
            }
            
            .box-side {
                position: absolute;
            }
            
            .box-back {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: translate3d(0, 0, calc(-1 * var(--box-depth)));
                background-color: #efefef;
            }
            
            .box-top
        }
    }
`;