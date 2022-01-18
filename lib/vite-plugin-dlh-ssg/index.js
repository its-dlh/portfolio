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