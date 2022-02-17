import { css, html } from "../html-template-tag";
import { Header } from "./Header";
import { SummaryList } from "./summary/SummaryList";
import { SummarySection } from "./summary/SummarySection";
import { FergusonEntry } from "./timeline/FergusonEntry";
import { ProPrintsEntry } from "./timeline/ProPrintsEntry";
import { TimelineSection } from "./timeline/TimelineSection";

export const Body = () => html`
    ${Header}
    <main>
        ${SummarySection(
            html`
                <p>
                    Versatile full-stack developer with insatiable curiosity, looking
                    to stretch my engineering skills to their limits and beyond. Comfortable on both
                    front-end and back-end, with a particular penchant for bringing UX to life with
                    interactivity, reactivity, and well-structured state management.
                </p>
            `,
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
                'GraphQL, Apollo',
                'PostgreSQL, mongoDB',
                'Google Firebase, Firestore'
            ),
            
            SummaryList({ title: 'Dangerous In...' })(
                'Python, Perl, Java, C Family, Go, Rust, Lua, GLSL',
                'Svelte, React, React Native',
                'Tailwind',
                'Fastify, Deno, Strapi'
            )
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