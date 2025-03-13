import { css, html } from "../html-template-tag";
import { Header } from "./Header";
import { SocialSection } from "./summary/SocialSection";
import { SummaryContent } from "./summary/SummaryContent";
import { SummaryList } from "./summary/SummaryList";
import { SummarySection } from "./summary/SummarySection";
import { FergusonEntry } from "./timeline/FergusonEntry";
import { TimelineEntry } from "./timeline/TimelineEntry";
import { TimelineEntryList } from "./timeline/TimelineEntryList";
import { TimelineSection } from "./timeline/TimelineSection";

export const Body = () => html`
    ${Header}
    <main>
        ${SummarySection(
            SummaryContent({ title: 'Summary' })(html`
                <p class="summary-text">
                    I am a versatile full-stack engineer eager to tackle high-impact challenges.
                    My first love is frontend web development, as reflected by my history of building marketing-focused,
                    design-driven websites, apps, and other interactive experiences. But I enjoy rising to whatever challenges present
                    themselves, and I am quite comfortable working in backend services, databases, cloud deployments, etc.
                </p>
            `),
            // SummaryList({ title: 'Strengths' })(
            //     'Versatile full-stack developer whose eagerness to learn is balanced by experience and maturity',
            //     'Skilled architect with an aptitude for building complex interactions and data flows',
            //     'Loves bringing UX to life with interactivity, reactivity, and state management',
            //     'Natural mentor with a desire to foster the growth and knowledge of those around him'
            // ),

            SummaryList({ title: 'Expert In...' })(
                'HTML, CSS, JavaScript',
                'TypeScript, Sass/SCSS',
                'React, Angular, Vue',
                'Webpack, Babel, PostCSS, Jest, ESLint',
                'Node.js, Express, PostgreSQL'
            ),

            SummaryList({ title: 'Experienced In...' })(
                'Redux, RTK Query, RxJS',
                'Kubernetes, Helm, Jenkins',
                'Puppeteer, Mocha, Stylelint',
                'WAI-ARIA standards',
            ),

            SummaryList({ title: 'Dabbled In...' })(
                'Svelte, React Native, Tailwind, Custom Elements',
                'Vite, Rollup, esbuild, Deno, Bun',
                'Python, Java, Perl, C/C++/C#, Go, Rust, Lua, GLSL'
            ),

            // SummaryContent({ title: 'Education' })(
            //     TimelineEntry({
            //         title: "Indiana Wesleyan University",
            //         subtitle: "B.S. Computer Information Systems",
            //         class: 'education-entry'
            //     })(html`
            //         <p>Marion, IN | 2007-2012</p>
            //     `)
            // ),

            SocialSection
        )}

        ${TimelineSection(html`
            <h2>Timeline</h2>
            
            ${TimelineEntry({
                title: 'Salesforce',
                subtitle: 'Lead Engineer, MuleSoft Access Management',
                start: 2022
            })(html`
                <p>
                    As my team's UX specialist, I maintain the MuleSoft Access Management, Sign-In, and Admin UIs.
                    Beyond UX engineering, I contribute to the core authentication server for the platform, supporting the numerous teams
                    who depend on our services and performing the same regular duties (e.g. on-call, investigations, deployments) expected of any engineer on the team.
                </p>
                
                <h5>Highlights</h5>
                ${TimelineEntryList(
                    "Implemented the new UI for connecting Salesforce orgs, with the associated API Catalog and Einstein/Agentforce controls",
                    "Executed our UI commitments to support various MuleSoft product launches, including CloudHub 2.0, Usage-Based Pricing, and RPA",
                    "Remediated a very large list of high-priority accessibility issues and built components to improve future resilience to these issues",
                    "Performed a long overdue migration from a legacy UI to the modern UI, closing functionality gaps, addressing customer feedback, and cautiously planning/executing a months-long rollout process",
                    "Engineered the UX for multiple ID provider account linking in both Sign-In and Access Management",
                    "Improved supportability for the platform by adding new information and controls to the internal Admin UI"
                )}
            `)}

            ${FergusonEntry}

            ${TimelineEntry({
                title: 'Pro Prints Gear',
                subtitle: 'Web Developer',
                start: 2007,
                end: 2013,
                class: 'second-page-entry'
            })(html`
                <p>
                    Built a strong foundation in web fundamentals and collaboration skills
                </p>
            `)}
            
            ${TimelineEntry({
                title: 'Freelance/Student Work',
                start: 2005,
                end: 2007
            })}

            <h2>Education</h2>
            ${TimelineEntry({
                title: "Indiana Wesleyan University (Marion, IN)",
                subtitle: "B.S. Computer Information Systems",
                start: 2007,
                end: 2012,
                // class: 'education-entry'
            })}
        `)}

        <!-- I want to do hard things. I've enjoyed the last several years I've spent pushing Ferguson Advertising forward technologically and mentoring bright young minds, but it's been quite awhile since I've truly felt out of my depth. I think I need to feel out of my depth in order to truly reach my potential, so I'm looking for engineering challenges that are bigger than anything I've done before. I'm looking to be in an environment with people smarter than me, people who will make me feel impostor syndrome.

        I have realized that my path of advancement in a small business is to become a manager, but I know that I have so much more engineering potential in me. I am hitting a ceiling, not of my own personal limitations, but the constraints of budget, time, and maintainability in a small team. I'm ready to find the job where I can really flex my engineering muscles, dive headlong into creative solutions, and collaborate with like-minded individuals.

        Thank you for your consideration,
        -DLH -->
    </main>
`;

export const style = css`
    body {
        font-family: "Raleway", sans-serif;
    }

    .second-page-entry {
        break-before: always;
        padding-top: 0.5in;
    }

    @media print {
        body {
            display: flex;
            flex-direction: column;
            height: 100vh;
            padding: 0.25in 0.5in 0.5in;
        }

        main {
            display: flex;
            flex: 1 1 auto;
        }
    }

    @page {
        margin: 0;
    }
`;
