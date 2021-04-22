module.exports = {
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                debug: true,
            }
        ],
        [
            'redocusaurus',
            {
                debug: Boolean(process.env.DEBUG || process.env.CI),
                specs: [{
                        specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
                        routePath: '/using-spec-url/'
                    },
                    {
                        spec: 'openapi.yaml',
                        routePath: '/using-spec-yaml/'
                    }
                ],
                theme: {
                    primaryColor: '#1890ff',
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
            }
        ]
    ],

    /** ************ Rest of your Docusaurus Config *********** */
    title: 'GestoPago API',
    tagline: 'Integrate Redoc easily into your Docusaurus Site',
    customFields: {
        meta: {
            description: 'Integrate Redoc easily into your Docusaurus Site',
        },
    },
    url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
    baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
    favicon: 'img/GPS.ico',
    themeConfig: {
        navbar: {
            title: 'GestoPago',
            items: [{
                to: 'docs/',
                activeBasePath: 'docs',
                label: 'Docs',
                position: 'left',
            }, ],
        },
        footer: {
            logo: {
                alt: 'Gestopago Logo',
                src: 'img/gestopago_logo.png',
            },
            style: 'dark',
            links: [{
                    title: 'Interactive Demo',
                    items: [{
                            label: 'API Transactional',
                            href: '/custom-layout',
                        },
                        {
                            label: 'API Payments',
                            href: 'https://gestopago.portalventas.net/sistema/demo/Payments/',
                        },
                    ],
                },
                {
                    title: 'Docs API',
                    items: [{
                            label: 'Transactional',
                            to: 'docs/',
                        },
                        {
                            label: 'Telcel Postpago',
                            to: 'docs/',
                        },
                        {
                            label: 'Payments',
                            to: 'docs/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Github',
                            href: 'https://www.npmjs.com/package/docusaurus-plugin-redoc',
                        },
                        {
                            label: 'Web',
                            href: 'https://www.gestopago.com/'
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()}  GESTOPAGO.  Built with <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
        },
    },
};