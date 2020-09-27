module.exports = {
  siteMetadata: {
    title: `Julian Garcia`,
    description: `Julian Garcia. Monash University. Computer Science. Cooperation.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pagesMarkdown`,
        path: `${__dirname}/pagesMarkdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPages`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications-pdf`,
        path: `${__dirname}/static/assets/publications-pdf`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `red`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/download.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-179113723-1",
        head: false,
      },
    },
  ],
}
