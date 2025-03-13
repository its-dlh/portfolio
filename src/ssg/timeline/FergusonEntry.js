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
        <p>
            During my tenure at Ferguson Advertising, I created and maintained a multitude of web/mobile projects for a variety of clients.
            Over time, as my influence and thought leadership grew, I was given more and more responsibility, and was eventually a people
            leader with four direct reports.
        </p>
        
        <h5>Highlights</h5>
        ${TimelineEntryList(
            "Estimated, planned, and architected many of the most demanding web projects and high-revenue contracts received during this time",
            "Drove the implementation of industry best practices in version control, issue tracking, and code reviews",
            "Provided mentorship and thought leadership, and served as a people leader for four direct reports"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Lead Developer',
        start: 2019,
        end: 2021
    })(html`
        ${TimelineEntryList(
            "Built a variety of increasingly complex websites, mobile apps, and interactive experiences, including Electron-based software for a trade show kiosk",
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
            "Re-created native mobile apps in web technologies with virtually no loss of UI/UX fidelity",
            "Drove adoption of modern front-end frameworks, build tools, and version control practices"
        )}
    `)}
`;
