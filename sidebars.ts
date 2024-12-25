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
            label: "Configuration",
            items: [
                {
                    type: 'doc',
                    id: 'configuration/trust-ca-root-cert',
                    label: "Trusted CA Root Certificate"
                },
            ]
        }
    ],
};

export default sidebars;
