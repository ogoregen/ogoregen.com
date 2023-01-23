
import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Navigation from "./navigation"

import "../style/style.css"

const PageTemplate = ({title, children}) => {

    const data = useStaticQuery(graphql`    
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return(
        <div class="fly-container">
            <div class="fly-content-wrapper">
                <div>
                    <Navigation/>
                    <h1>{title}</h1>
                    {children}
                </div>
                <footer class="fly-border-top fly-margin fly-margin-small-bottom">
                    <p class="fly-text-center fly-margin-0-bottom">&copy; 2023 flighty</p>
                </footer>
            </div>
        </div>
    )
}

export default PageTemplate
