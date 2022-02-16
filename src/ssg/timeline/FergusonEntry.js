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
            As Technical Development Manager, my role on the dev team is to drive adoption of new technologies
            and train other developers in those technologies, while performing engineering tasks that require a
            more practiced hand. I have four direct reports, and my technical leadership extends to the whole team.
        </p>
        
        <h5>Highlights</h5>
        ${TimelineEntryList(
            "Estimated, scoped, planned, and engineered many of the company's most demanding projects",
            "Oversaw the formalization of procedures for version control, code review, and issue tracking",
            "Kickstarted the creation of internal Docker-based tooling for local WordPress development",
            "Mentored and trained the other development staff in our tech stack, as well as core web concepts and industry best practices",
            "Fostered autonomy and growth in mid-level developers while providing architectural advice as needed",
            "Carried out difficult conversations with employees who were not performing to our standards",
            "Collaborated with the other leadership in interviewing and evaluating potential new hires",
            "Continually evaluated new libraries, frameworks, build tools, services, etc."
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Lead Developer',
        start: 2019,
        end: 2021
    })(html`
        ${TimelineEntryList(
            "Led many of the agency's most complicated projects",
            'Occupied my own slice of the org chart titled "Special Projects"',
            "Created Electron-based kiosk software to enhance a client's sales presence at trade shows",
            "Took ownership of a variety of dubiously-architected projects left by a former senior dev and saw them through to completion",
            "Built up a suite of web apps for a large client by unifying development in a monorepo and maintaining a shared backend",
            "Displayed strong mentorship capabilities, becoming a frequent advisor to devs of varying levels of seniority"
        )}
    `)}
    
    ${TimelineEntry({
        subtitle: 'Web and Mobile Developer',
        start: 2013,
        end: 2019
    })(html`
        ${TimelineEntryList(
            "Solved challenging problems with a high degree of autonomy",
            "Single-handedly pioneered our usage of git, despite senior staff resistance to version control",
            "Played a prominent role in nearly all of the team's mobile app projects",
            "Successfully advocated for sunsetting legacy technologies and adopting modern JS tools and libraries"
        )}
    `)}
`;
