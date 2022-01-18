import { defineConfig } from "vite";
import { renderIndexHtmlPlugin } from "./lib/vite-plugin-render-index-html";


export default defineConfig({
    plugins: [
        renderIndexHtmlPlugin()
    ]
});