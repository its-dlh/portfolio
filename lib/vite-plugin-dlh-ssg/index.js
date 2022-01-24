import fs from 'fs/promises';
// import { Body, BodyStyles } from '../../sections/Body.js';

/** @param {string} id */
const isSsgComponent = id => id.includes('/ssg/');
/** @param {string} id */
const isVirtualCss = id => isSsgComponent(id) && id.endsWith('lang.css');

export const dlhSsgPlugin = () => ({
    name: 'dlh-ssg',
    async transformIndexHtml(indexHtml, opt) {
        // const bodyHtml = await Body();
        // const bodyCss = BodyStyles();
        
        let bodyHtml = '';
        if (opt.server) {
            const { render } = await opt.server.ssrLoadModule('/lib/vite-plugin-dlh-ssg/entry-server.ts');
            bodyHtml = await render();
        } else {
            console.log(opt);
        }
        
        return indexHtml.replace(
            /<body>/,
            '<body>'
                + bodyHtml
                // + '\n<script type="module" src="/lib/vite-plugin-dlh-ssg/entry-client.ts"></script>'
        );
    },
    
    // resolveId(id) { }
    
    async load(id, opt) {
        console.log('load', id);
        // We only want a custom loader for virtual CSS
        if (!isVirtualCss(id)) return null;
        // Should we check for opt.ssr?
        
        const [filePath] = id.split('?');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const cssMatch = fileContents.match(/css`([^`]+)`/m);
        
        const style = cssMatch?.[1] || '';
        console.log('got style', style);
        
        return style;
    },
    
    /**
     * Vite gives us the full contents of a JS file as a string, and we
     * give it a new string to use in place of that.
     */
    transform(code, id, opt) {
        // We only want to transform the original SSG component modules
        if (!isSsgComponent(id) || isVirtualCss(id) || opt.ssr) return;
        
        // Strip out all JS except imports, and simplify those
        const lines = code
            .split('\n')
            .filter(line => line && line.match(/^\w*import /))
            .map(line => line.replace(/import .+ from /, 'import '));
        
        // Inject a fake module ID which will later get loaded as CSS
        lines.push(`import '${id}?dlh-ssg&lang.css'`);
        
        return lines.join('\n');
    }
});

/**
 * DISCORD - Alec Larson:
 * > If I have an SSR module that imports and uses classes from a CSS module, can the CSS module get appropriately routed and output via the normal CSS pipeline, while the JS itself is still treated as SSR-only?
 * You'd need to parse the AST with Babel or w/e and remove all but the .css imports
 * > how do I tell the load hook that the string I'm returning is CSS rather than JS?
 * You could do the querystring trick you mentioned, or just return a simple .css import from the load hook for your .js module
 * Actually, for CSS modules, it might be much trickier, unfortunately
 * Normal CSS is straight forward
 */
