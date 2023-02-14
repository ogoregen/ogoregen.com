
import * as React from "react"
import {Link, graphql} from "gatsby"
import PageTemplate from "../components/pagetemplate"
import { StaticImage } from "gatsby-plugin-image"

const Home = ({data}) => {

    return(
        <PageTemplate title="About">
            <p>I'm a software developer and student of philosophy who makes open source projects. I like having a corner on the web although I don't write much. In fact, most of what I do with it is designing it making it work. Here you can see me document my projects and write a bit. I do hope to be helpful or inspiring.</p>
            <p>This page runs on Gatsby and is open source for any inspiration it may provide.</p>
            <p>You can reach me at vrtxrry@pm.me to say hi. I would love to hear from you.</p>
            <ul>
                <li><a href="">Open Source Projects on GitHub</a></li>
                <li><a href="">Game and Graphics Projects on itch.io</a></li>
            </ul>
            <h2>Birb</h2>
            <StaticImage scr="images/birb"/>
            <p>Here's my late bird friend Birb. He always sung and loved a branch of millet. He would accompany me on the computer and rest under the monitor. He was with me in a time I never wish to forget. I love and miss you, Birb.</p>
        </PageTemplate>
    )
}

export default Home

export const Head = () => <title>flighty</title>
