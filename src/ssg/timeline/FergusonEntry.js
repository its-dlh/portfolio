import { html, css } from "../../html-template-tag";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineEntryList } from "./TimelineEntryList";

export const FergusonEntry = () => html`
    ${TimelineEntry({
        title: 'Ferguson Advertising',
        subtitle: 'Technical Development Manager',
        start: 2021,
        end: 2022
    })(html`
        ${TimelineEntryList(
            "Estimated, planned, and architected many of the most demanding web projects and high-revenue contracts received during this time",
            "Oversaw the formalization of standards for version control, code review, and issue tracking",
            "Provided mentorship and thought leadership, and served as a people leader for four direct reports"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Lead Developer',
        start: 2019,
        end: 2021
    })(html`
        ${TimelineEntryList(
            "Built a variety of increasingly complex websites, mobile apps, and interactive experiences",
            "Created Electron-based kiosk software to enhance a client's sales presence at trade shows",
            "Took ownership of some messy (but high-revenue) projects, cleaned them up, and delivered successfully"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Web and Mobile Developer',
        start: 2013,
        end: 2019
    })(html`
        ${TimelineEntryList(
            "Played a prominent role in the team's most technically demanding projects",
            "Re-created native mobile apps using web technologies with virtually no loss of UI/UX fidelity",
            "Single-handedly pioneered company's usage of git, despite senior staff resistance to version control",
            "Successfully advocated for adopting modern front-end frameworks, libraries, and build tools"
        )}
    `)}
`;
