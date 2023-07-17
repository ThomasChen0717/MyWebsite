import { render } from "../preset/vue.js";
export const bridgeData = {
    "workspaceFolder": "file:///d%3A/project/portfolio",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "src/views/HomeView.vue",
    "mapFileRelPath": "src/views/HomeView.vue",
    "presetName": "vue",
    "workspaceFolderName": "portfolio"
};
export const preview = () => render(getMod);
const getMod = () => import("../../src/views/HomeView.vue");