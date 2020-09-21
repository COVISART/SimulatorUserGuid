module.exports = {
  url: 'https://covisart.github.io/', // Your website URL
  baseUrl: '/SimulatorUserGuid/',
  projectName: 'SimulatorUserGuid',
  organizationName: 'covisart',
  title: "Covisart New Generation Simulator",
  tagline:
    "Vehicle simulator based on a motion system developed using virtual and augmented reality technologies.",
  url: "https://covisart.com/products-and-solutions/new-generation-simulator/",
  baseUrl: "/SimulatorUserGuid",
  favicon: "img/favicon.ico",
  organizationName: "evert-arias", // Usually your GitHub org/user name.
  projectName: "New Generation Simulator", // Usually your repo name.
  themeConfig: {
    /*announcementBar: {
      id: "newrelease",
      content:
        '⭐️ EasyButton v2.0 has been released. Download from <a target="_blank" rel="noopener noreferrer" href="https://github.com/evert-arias/EasyButton/archive/v2.0.0.zip">GitHub</a>. ⭐️',
    },*/
    navbar: {
      title: "Covisart Simulator",
      logo: {
        alt: "Covisart Simulator Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/userguid",
          activeBasePath: "userguid",
          label: "Setups",
          position: "left",
        },
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/on-single-press-api",
          activeBasePath: "api",
          label: "API",
          position: "left",
        },
        {
          to: "docs/on-single-press-example",
          activeBasePath: "examples",
          label: "Examples",
          position: "left",
        },
        { to: "/contributors", label: "Contributors", position: "left" },
        { to: "https://blog.covisart.com", label: "Blog", position: "right" },
        {
          href: "https://github.com/Covisart",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Setups",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction",
            },
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "Fundamentals",
              to: "docs/fundamentals",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction",
            },
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "Fundamentals",
              to: "docs/fundamentals",
            },
          ],
        },
        {
          title: "Examples",
          items: [
            {
              label: "Single Press",
              to: "docs/on-single-press-example",
            },
            {
              label: "Detecting Sequence",
              href: "docs/on-sequence-example",
            },
            {
              label: "Pressed For Duration",
              href: "docs/on-pressed-for-duration-example",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "https://blog.earias.me/",
            },
            {
              label: "GitHub",
              href: "https://github.com/evert-arias/EasyButton",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCbdTIe6YpgJ6bCL7FI16Bcw",
            },
          ],
        },
      ],
      copyright: `Made with 💙 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/evert-arias">Evert Arias</a>`,
    },
    googleAnalytics: {
      trackingID: "UA-137998950-8",
      anonymizeIP: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/COVISART/SimulatorUserGuid",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve('@docusaurus/plugin-google-analytics')]
};
