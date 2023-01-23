
import * as React from "react"
import {Link} from "gatsby"

const Navigation = () => {

    return(
        <div>
            <div class="fly-width-1-1 fly-flex fly-flex-space-between fly-flex-center">
                <div>
                    <Link to="/" class="fly-heading fly-link-text">flighty</Link>
                    <div class="fly-margin-horizontal">computer science and such</div>
                </div>
                <nav class="fly-hidden-small">
                    <ul class="fly-margin fly-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/me">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
                <div class="fly-margin fly-visible-small">
                    <a onclick="toggleVisibility(document.getElementById('mobile_menu'));" class="gg-chevron-down"></a>
                </div>
            </div>
            <nav class="fly-margin" id="mobile_menu" hidden>
                <ul class="fly-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/me">About</Link></li>
                    <li><Link to="/work">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    )    
}

export default Navigation
