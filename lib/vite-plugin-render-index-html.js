import { Body, BodyStyles } from '../sections/Body.js';

export const renderIndexHtmlPlugin = () => ({
    name: 'render-index-html',
    async transformIndexHtml(indexHtml) {
        const bodyHtml = await Body();
        const bodyCss = BodyStyles();
        
        return indexHtml.replace(/<body>/, '<body>' + bodyHtml);
    }
});