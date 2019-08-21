// const dirTree = require("directory-tree");
const path = require("path");

module.exports = {
  chainMarkdown(config) {
    config.plugin("imsize").use(require("markdown-it-imsize"));
  },
  title: "techsupport@ermapta.org",
  // head: [],
  // port: 8080,
  markdown: {
    typographer: true,
    plugins: ["markdown-it-attrs", "markdown-it-div", "markdown-it-imsize"],
  },
  plugins: [
    // "@vuepress/register-components",
    "@vuepress/search",
    "@vuepress/active-header-links",
    "@vuepress/nprogress",
  ],
  themeConfig: {
    sidebar: [
      "/",
      {
        title: "Get started in 1, 2, 3",
        collapsable: false,
        children: [
          "get-started",
          ["set-up-email", "1. Set up email"],
          ["get-to-know-teams", "2. Get to know Teams"],
          ["save-and-share-documents", "3. Save and share docs"],
        ],
      },
    ],
  },
};
