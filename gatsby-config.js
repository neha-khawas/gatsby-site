module.exports = {
  siteMetadata: {
    title: "Gatsby site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "XinuJhyzn-9GL3045etuujssKAVI55BCR8WzZywWJkg",
        spaceId: "xw1m2xujupr0",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
