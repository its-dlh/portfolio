import { css, html } from "../html-template-tag";
import { Header } from "./Header";
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
                    Versatile full-stack developer with insatiable curiosity looking
                    to stretch engineering skills to the limit and beyond. Passionate
                    about front-end reactivity, data flow, and state management, while completely
                    comfortable diving deep into a backend, even those authored in unfamiliar languages.
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
                'Vite, Webpack, Babel, PostCSS',
                'Electron, Ionic, Capacitor, Cordova',
                'React, RxJS',
                'GraphQL, Apollo',
                'PostgreSQL, mongoDB',
                'Google Firebase, Firestore'
            ),
            
            SummaryList({ title: 'Dangerous In...' })(
                'Python, Perl, Java, C Family, Go, Rust, Lua, GLSL',
                'Svelte, React Native',
                'Tailwind',
                'Fastify, Deno, Strapi'
            ),
            
            SummaryContent({ title: 'Education' })(
                TimelineEntry({
                    title: "Indiana Wesleyan University",
                    subtitle: "B.S. Computer Information Systems",
                    class: 'education-entry'
                })(html`
                    <p>Marion, IN | 2007-2012</p>
                `)
            ),
        )}
        
        ${TimelineSection(html`
            <h2>Timeline</h2>
            
            ${FergusonEntry}
            ${ProPrintsEntry}
        `)}
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