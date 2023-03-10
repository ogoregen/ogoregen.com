
import * as React from "react"
import {Link, graphql} from "gatsby"
import PageTemplate from "../../components/pagetemplate"

export const query = graphql`
    query{
        allMdx(sort: {frontmatter: { date: DESC }}){
            nodes {
                frontmatter{
                    title
                    date(formatString: "MMM. D, YYYY")
                    slug
                    description
                }
                id
            }
        }
    }
    `

const Blog = ({data}) => {

    return(
        <PageTemplate title="Blog">
            {
                data.allMdx.nodes.map(node => (
                    <div className="fly-flex fly-flex-space-between fly-margin-bottom" key={node.id}>
                        <div>
                            <Link to={`/blog/${node.frontmatter.slug}`} className="fly-text-lead">{node.frontmatter.title}</Link>
                            <p className="fly-margin-none-top">{node.frontmatter.description}</p>
                        </div>
                        <p className="fly-margin-none-top fly-mobile-only">{node.frontmatter.date}</p>
                    </div>
                ))
            }
        </PageTemplate>
    )
}

export default Blog

export const Head = () => <title>blog</title>
