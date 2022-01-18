// import { Body, BodyStyles } from '../../sections/Body.js';

export const dlhSsgPlugin = () => ({
    name: 'dlh-ssg',
    async transformIndexHtml(indexHtml, {server}) {
        // const bodyHtml = await Body();
        // const bodyCss = BodyStyles();
        
        const { render } = await server.ssrLoadModule('/lib/vite-plugin-dlh-ssg/entry-server.ts');
        const bodyHtml = await render();
        
        return indexHtml.replace(/<body>/, '<body>' + bodyHtml);
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