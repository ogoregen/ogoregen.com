/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

    siteMetadata: {

        title: "flighty",
        description: "Example project for the Gatsby Head API",
        image: "/gatsby-icon.png",
        siteUrl: "https://ogoregen.com",
        titleSeparator: " - ",
    },

    plugins: [

        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [{
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog_posts",
                path: `${__dirname}/blog_posts`,
            }
        },
        {
            resolve: "gatsby-plugin-preconnect",
            options: {
                domains: [
                    {domain: "https://rsms.me/", crossOrigin: false},
                ],
            },
        },
    ]
}
