import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: "doc",
            id: "intro",
            label: "Introduction 🚀"
        },
        {
            type: "doc",
            id: "install",
            label: "Installation 🛠️"
        },
        {
            type: 'category',
            label: 'Tutorial - Basics',
            items: [
                'tutorial-basics/create-a-page',
                'tutorial-basics/create-a-document',
                'tutorial-basics/create-a-blog-post',
                'tutorial-basics/markdown-features',
                'tutorial-basics/deploy-your-site',
                'tutorial-basics/congratulations',
            ],
        },
        {
            type: 'category',
            label: "Tutorial - Extras",
            items: [
                'tutorial-extras/manage-docs-versions',
                'tutorial-extras/translate-your-site',
            ]
        }
    ],
};

export default sidebars;
