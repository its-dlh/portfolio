import { html, css } from "../../html-template-tag";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineEntryList } from "./TimelineEntryList";

export const ProPrintsEntry = () => html`
    ${TimelineEntry({
        title: 'Pro Prints Gear (Marion, IN)',
        subtitle: 'Web Developer',
        start: 2007,
        end: 2013
    })(html`
        ${TimelineEntryList(
            "Honed fundamentals of full-stack LAMP development",
            "Became adept at matching design comps",
            "Engineered an interactive T-shirt Design Lab in Google Web Toolkit"
        )}
    `)}
`;
