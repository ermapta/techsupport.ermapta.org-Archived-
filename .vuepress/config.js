// const dirTree = require("directory-tree");
const path = require("path");

module.exports = {
  chainMarkdown(config) {
    config.options
      .typographer(true)
      .end()
      .plugin("attrs")
      .use(require("markdown-it-attrs"))
      .end()
      .plugin("imsize")
      .use(require("markdown-it-imsize"))
      .end();
  },
  title: "techsupport@ermapta.org",
  // head: [],
  // port: 8080,
  // markdown: {
  //   typographer: true,
  //   plugins: ["markdown-it-attrs", "markdown-it-div", "markdown-it-imsize"],
  // },
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
