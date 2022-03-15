import { defineConfig } from "vite";
import { dlhSsgPlugin } from "./lib/vite-plugin-dlh-ssg";
import path from 'path';

export default defineConfig({
    build: {
        polyfillModulePreload: false
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        dlhSsgPlugin()
    ]
});