import { Body, BodyStyles } from '../sections/Body.js';

export const dlhSsgPlugin = () => ({
    name: 'dlh-ssg',
    async transformIndexHtml(indexHtml) {
        const bodyHtml = await Body();
        const bodyCss = BodyStyles();
        
        return indexHtml.replace(/<body>/, '<body>' + bodyHtml);
    }
});