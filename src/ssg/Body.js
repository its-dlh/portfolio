import { css, html } from "../html-template-tag";
import { Header } from "./Header";
import { SocialSection } from "./summary/SocialSection";
import { SummaryContent } from "./summary/SummaryContent";
import { SummaryList } from "./summary/SummaryList";
import { SummarySection } from "./summary/SummarySection";
import { FergusonEntry } from "./timeline/FergusonEntry";
import { ProPrintsEntry } from "./timeline/ProPrintsEntry";
import { TimelineEntry } from "./timeline/TimelineEntry";
import { TimelineSection } from "./timeline/TimelineSection";

export const Body = () => html`
    ${Header}
    <main>
        ${SummarySection(
            SummaryContent({ title: 'Summary' })(html`
                <p class="summary-text">
                    Versatile full-stack developer looking
                    to stretch engineering skills and deepen knowledge. Passionate
                    about front-end reactivity, state management, and build systems, while also
                    skilled in backend development and interested in systems programming.
                </p>
            `),
            // SummaryList({ title: 'Strengths' })(
            //     'Versatile full-stack developer whose eagerness to learn is balanced by experience and maturity',
            //     'Skilled architect with an aptitude for building complex interactions and data flows',
            //     'Loves bringing UX to life with interactivity, reactivity, and state management',
            //     'Natural mentor with a desire to foster the growth and knowledge of those around him'
            // ),
            
            SummaryList({ title: 'Expert In...' })(
                'HTML, CSS, Sass',
                'ES2021, TypeScript',
                'Vue, Nuxt, Angular',
                'Node.js, Express',
                'PHP, WordPress, MySQL/MariaDB'
            ),
            
            SummaryList({ title: 'Experienced In...' })(
                'Vite, esbuild, Webpack, Babel, PostCSS',
                'Electron, Ionic, Capacitor, Cordova',
                'React, RxJS',
                'GraphQL, Apollo',
                'PostgreSQL, mongoDB, SQL Server',
                'Google Firebase, Firestore'
            ),
            
            SummaryList({ title: 'Dangerous In...' })(
                'Python, Perl, Java, C Family, Go, Rust, Lua, GLSL',
                'Svelte, React Native, Tailwind',
                'Fastify, Deno, Strapi, Docker'
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
            
            ${FergusonEntry}
            ${ProPrintsEntry}
            
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
    
    .education-entry p {
        margin: 0.25em 0;
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