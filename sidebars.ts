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
                    type: "doc",
                    id: 'configuration/auto-dns-resolv',
                    label: "Automatic DNS Resolution"
                },
                {
                    type: 'doc',
                    id: 'configuration/trust-ca-root-cert',
                    label: "Trusted CA Root Certificate"
                },
                {
                    type: 'doc',
                    id: 'configuration/database',
                    label: "Database"
                }
            ]
        },
        {
            type: "doc",
            id: 'coc',
            label: "Code of Conduct"
        },
        {
            type: "doc",
            id: "contrib",
            label: "Contribution"
        }
    ],
};

export default sidebars;
