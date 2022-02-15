import { html, css } from "../../html-template-tag";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineEntryList } from "./TimelineEntryList";

export const FergusonEntry = () => html`
    ${TimelineEntry({
        title: 'Ferguson Advertising',
        subtitle: 'Technical Development Manager',
        start: 2021
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
    
    ${TimelineEntry({
        subtitle: 'Lead Developer (of "Special Projects")',
        start: 2019,
        end: 2021
    })(html`
        <p>
            Even before having a formalized senior or management role, I had made a name for myself as
            someone who could take on our most complicated, exotic projects with aplomb, to the point
            that I occupied my own little "Special Projects" slice of the org chart. I had also
            displayed strong mentorship capabilities, and junior devs would often turn to me for advice
            even before consulting their own team leads.
        </p>
        
        <p>
            Some specific highlights of these years include...
        </p>
        ${TimelineEntryList(
            "Creating Electron-based kiosk software to enhance a client's sales presence at trade shows",
            "Taking ownership of a variety of poorly-architected projects left by a former senior dev and seeing them through to completion",
            "Building up a suite of web apps for a large client by unifying development in a monorepo and continually improving a shared backend",
            "Pushing for more widespread git usage internally"
        )}
    `)}
`;
