import { html, css } from "../../html-template-tag";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineEntryList } from "./TimelineEntryList";

export const ProPrintsEntry = () => html`
    ${TimelineEntry({
        title: 'Pro Prints Gear (Marion, IN)',
        subtitle: 'Web Developer',
        start: 2007,
        end: 2012
    })(html`
        <p>
            Being promoted to the position of Technical Development Manager served to formalize
            my role on the dev team as someone driving not only our adoption of new technologies,
            but also the training of other developers in these technologies. I have four developers
            under my direct supervision, but my technical leadership extends to the whole team.
        </p>
        
        <p>
            During my time in this role, I have...
        </p>
        ${TimelineEntryList(
            "Been involved in the estimating, scoping, planning, and implementation of many of the company's most demanding projects",
            "Overseen the formalization of version control, code review, issue tracking, and deployment procedures for the whole dev team",
            "Kickstarted the creation of internal Docker-based tooling for local WordPress development",
            "Mentored and trained the other development staff in our tech stack, as well as core web concepts and industry best practices",
            "Fostered autonomy and growth in mid-level developers while still providing architectural advice as needed",
            "Carried out difficult conversations with employees who were not performing to our standards",
            "Collaborated with the other leadership in interviewing and evaluating potential new hires",
            "Continually evaluated new libraries, frameworks, build tools, services, etc."
        )}
    `)}
`;
