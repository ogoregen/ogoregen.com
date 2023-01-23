
import * as React from "react"
import {Link, graphql} from "gatsby"
import PageTemplate from "../components/pagetemplate"

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

const Home = ({data}) => {

    return(
        <PageTemplate>
            <div class="fly-margin fly-grid">
                <div class="fly-border fly-width-2-3" style={{display: "flex", alignItems: "center", borderColor: "inherit"}}>
                    <div>
                        <p class="fly-heading">Hey there.</p>
                        <p class="fly-text-lead">This is <span class="fly-text-primary">flighty</span>. I've rarely written and even more rarely written well. This page is my attempt to change that by sharing what I learn and create.</p>
                    </div>
                </div>
            </div>
            <div class="fly-width-2-3" style={{margin: "auto"}}>
                <h2>Here are the latest of my writings.</h2>
                <ul class="fly-margin" style={{listStyle: "none", padding: 0}}>
                    {
                    data.allMdx.nodes.map(node => (
                        <li key={node.id} style={{marginBottom: "16px"}}>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <Link className="fly-article-link" to={`/blog/${node.frontmatter.slug}`} style={{fontSize: "1.1em", fontWeight: 400}}>{node.frontmatter.title}</Link>
                            </div>
                            <div>{node.frontmatter.date}</div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </PageTemplate>
    )
}

export default Home

export const Head = () => <title>flighty</title>
