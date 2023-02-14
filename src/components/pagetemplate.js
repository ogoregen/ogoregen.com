
import * as React from "react"
import Header from "./header"
import Footer from "./footer"

import "../style/style.css"

const PageTemplate = ({title, subtitle, children}) => {

    return(
        <>
        <div className="fly-container" style={{zIndex: 1, position: "relative"}}>
            <div>
                <Header/>
                <main className="fly-width-2-3 fly-margin-horizontal-auto">
                    <div className="fly-text-center">
                        <h1 className="fly-margin-small-bottom">{title}</h1>
                        {subtitle ? <span className="fly-text-muted">{subtitle}</span> : null}
                    </div>
                    <div className="fly-margin-large-top">
                        {children}
                    </div>
                </main>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default PageTemplate
