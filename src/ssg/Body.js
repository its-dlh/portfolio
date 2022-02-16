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
                'Loves bringing UX to life with interactivity, reactivity, and state management',
                'Natural mentor with a desire to foster the growth and knowledge of those around him'
            ),
            
            SummaryList({ title: 'Experienced With...' })(
                'HTML/CSS/JS, TypeScript',
                'Vue, Nuxt, Angular, Ionic, jQuery',
                'Webpack, Babel, Sass, PostCSS',
                'Electron, Capacitor, Cordova',
                'Node.js, Express, PHP, WordPress',
                'REST, GraphQL, Apollo',
                'MySQL/MariaDB, mongoDB',
                'Google Firebase, Firestore'
            ),
            
            SummaryList({ title: 'Also Familiar With...' })(
                'Python, Perl, Java, C Family, Go',
                'React, Svelte',
                'Vite, Rollup',
                'React Native, Expo',
                'Fastify, Deno',
                'PostgreSQL, SQL Server',
                'Cloudflare, Netlify, Auth0',
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