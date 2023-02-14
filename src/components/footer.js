
import * as React from "react"
import {Link} from "gatsby"

const Footer = () => {

    return(
        <footer className="fly-flex fly-flex-space-around fly-margin-horizontal-auto fly-margin-bottom fly-width-1-1" style={{bottom: "1rem", zIndex: 1, position: "absolute"}}>
            <div>
                <span>&copy; {new Date().getFullYear()} flighty</span>
                <a href="/rss.xml" className="fly-margin-left fly-link-text">GitHub</a>
                <Link to="/rss.xml" className="fly-margin-left fly-link-text">RSS</Link>
            </div>
        </footer>
    )
}

export default Footer
