export const renderIndexHtmlPlugin = () => ({
    name: 'render-index-html',
    transformIndexHtml(indexHtml) {
        // TODO replace placeholders in index.html with rendered strings
        return indexHtml;
    }
});