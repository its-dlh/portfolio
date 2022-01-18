import { Body } from '../sections/Body.js';

export const renderIndexHtmlPlugin = () => ({
    name: 'render-index-html',
    async transformIndexHtml(indexHtml) {
        const bodyHtml = await Body();
        
        return indexHtml.replace(/<body>/, '<body>' + bodyHtml);
    }
});