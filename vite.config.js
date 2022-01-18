import { defineConfig } from "vite";
import { dlhSsgPlugin } from "./lib/vite-plugin-dlh-ssg";


export default defineConfig({
    plugins: [
        dlhSsgPlugin()
    ]
});