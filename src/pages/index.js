
import * as React from "react"
import {Link} from "gatsby"
import PageTemplate from "../components/pagetemplate"

const Home = () => {

    return(
        <>
            <iframe src="/planets"
                title="planets"
                width={document.documentElement.clientWidth}
                height={document.documentElement.clientHeight}
                style={{borderStyle: "none", position: "fixed", zIndex: 0}}
            />
            <PageTemplate title="Hello!">
                <p className="fly-text-center fly-margin-small fly-margin-none-top" style={{fontSize: "1.5rem"}}>I'm flighty, and happy you're here.</p>
                <p className="fly-text-center fly-margin-small" style={{fontSize: "1.5rem"}}>I make <Link to="/work">open source projects</Link></p>
                <p className="fly-text-center fly-margin-small" style={{fontSize: "1.5rem"}}>And occasionally <Link to="/blog">write</Link>.</p>
            </PageTemplate>
        </>
    )
}

export default Home

export const Head = () => (
    <>
        <title>flighty</title>
    </>
)
