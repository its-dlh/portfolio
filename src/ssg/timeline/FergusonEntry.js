import { html, css } from "../../html-template-tag";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineEntryList } from "./TimelineEntryList";

export const FergusonEntry = () => html`
    ${TimelineEntry({
        title: 'Ferguson Advertising (Fort Wayne, IN)',
        subtitle: 'Technical Development Manager',
        start: 2021
    })(html`
        <p>
            As Technical Development Manager, I promote adoption of new technologies, foster education and professional development for the dev team,
            and perform engineering tasks that require a more practiced hand. I have four direct reports, and my technical leadership extends to the whole team.
        </p>
        
        <h5>Highlights</h5>
        ${TimelineEntryList(
            "Estimated, scoped, planned, and engineered the company's most demanding projects",
            "Oversaw the formalization of procedures for version control, code review, and issue tracking",
            "Kickstarted the creation of internal Docker-based tooling for local WordPress development",
            "Mentored and trained the other development staff in our tech stack, as well as core web concepts and industry best practices",
            "Participated in interviews and evaluations for potential new hires",
            "Created an Airtable app to aid in managing relational data for multiple clients"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Lead Developer',
        start: 2019,
        end: 2021
    })(html`
        ${TimelineEntryList(
            "Created Electron and Angular-based kiosk software to enhance a client's sales presence at trade shows",
            "Took ownership of a variety of dubiously-architected projects left by a former senior dev and saw them through to completion",
            "Built up a suite of web apps for a large client by unifying development in a monorepo and maintaining a shared backend",
            "Learned graph theory (BFS) to model branching and merging paths in a business case tool app"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Web and Mobile Developer',
        start: 2013,
        end: 2019
    })(html`
        ${TimelineEntryList(
            "Played a prominent role in nearly all of the team's mobile app projects",
            "Re-created a native iOS app in Ionic/AngularJS with virtually no loss of UI/UX fidelity",
            "Single-handedly pioneered company's usage of git, despite senior staff resistance to version control",
            "Successfully advocated for adopting modern front-end frameworks, libraries, and build tools."
        )}
    `)}
`;
