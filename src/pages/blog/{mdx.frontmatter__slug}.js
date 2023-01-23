
import * as React from "react"
import {graphql} from "gatsby"
import PageTemplate from "../../components/pagetemplate"

export const query = graphql`
    query($id: String){
        mdx(id: {eq: $id}){
            frontmatter{
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }`

const BlogPost = ({data, children}) => {

    return(
        <PageTemplate title={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </PageTemplate>
    )
}

export default BlogPost

export const Head = () => <title>flighty</title>
