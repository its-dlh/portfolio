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
            SummaryList({ title: 'Strengths' })(
                'Versatile full-stack developer whose eagerness to learn is balanced by experience and maturity',
                'Skilled architect with an aptitude for building complex interactions and data flows',
                'Loves bringing UX to life with interactivity, reactivity, and airtight state management',
                'Natural mentor with a desire to foster the growth and knowledge of those around him'
            ),
            
            SummaryList({ title: 'Best Friends' })(
                'ES2021, TypeScript',
                'Vue, Svelte',
                'Vite',
                'Sass, PostCSS',
                'Electron, Capacitor',
                'Google Firebase, Firestore',
                'Regular expressions',
                'GNU/Linux'
            ),
            
            SummaryList({ title: 'Friends' })(
                'Vanilla HTML/CSS/JS',
                'Nuxt, Angular, jQuery',
                'Webpack, Babel',
                'Ionic, Cordova',
                'REST, GraphQL, Apollo',
                'Node.js, Express, PHP, WordPress',
                'MySQL/MariaDB, mongoDB',
                'Apache, nginx'
            ),
            
            SummaryList({ title: 'Aquaintances' })(
                'React, React Native, Expo',
                'Fastify, Deno',
                'PostgreSQL, SQL Server',
                'Google Web Toolkit, Apache Tomcat',
                'Python, Perl, Java, C, C++, C#, Objective C, Lua, GLSL',
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