// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIC BO : User Manual',
  tagline: 'KR Manual Documentation',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://kr-manual.vercel.app',
  baseUrl: '/',

  organizationName: 'wooju-lee',
  projectName: 'common_manual_kr',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/wooju-lee/common_manual_kr/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-image-zoom'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'IIC BO : User Manual',
        logo: {
          alt: 'IIC BO Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'reportSidebar',
            position: 'left',
            label: 'Report',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Copyright © 2026 IIC_PM Wooju. All rights reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.9)',
        },
      },
    }),
};

export default config;
