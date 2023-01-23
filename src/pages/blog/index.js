
import * as React from "react"
import {Link, graphql} from "gatsby"
import PageTemplate from "../../components/pagetemplate"

export const query = graphql`
    query{
        allMdx(sort: {frontmatter: { date: DESC }}){
            nodes {
                frontmatter{
                    title
                    date(formatString: "MMMM D, YYYY")
                    slug
                }
                id
            }
        }
    }
    `

const Blog = ({data}) => {

    return(
        <PageTemplate title="Blog">
            <ul>
                {
                data.allMdx.nodes.map(node => (
                    <li key={node.id}>
                        <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                        <p>{node.frontmatter.date}</p>
                    </li>
                ))
                }
            </ul>
        </PageTemplate>
    )
}

export default Blog

export const Head = () => <title>blog</title>
