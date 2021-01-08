module.exports = {
  siteMetadata: {
    title: `Raj Chhatbar`,
    description: `I am a software engineer based in LA!`,
    siteUrl: `https://rajchhatbar.com`,
    image: '/images/Raj_Chhatbar.png',
    author: `@raj`,
    keywords: `Raj Chhatbar, Raj, Chhatbar, rajchhatbar, software engineer, full-stack engineer, software developer, javascript, python`,
    siteLang: `en_US`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/global";
                @import "${__dirname}/src/styles/_include-media";`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raj Chhatbar | Software Engineer`,
        short_name: `Raj Chhatbar`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        legacy: false,
        include_favicon: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-186949274-1`,
      },
    },
  ],
}
