/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

    siteMetadata: {

        title: `ogoregen`,
        siteUrl: `https://www.yourdomain.tld`,
    },

    plugins: [
        
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                
                name: `blog_posts`,
                path: `${__dirname}/blog_posts`,
            }
        },
    ],
}
