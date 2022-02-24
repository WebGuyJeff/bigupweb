import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
    return <main>
        <a href="/">
            <StaticImage
                alt="Bigup Web Logo"
                src="../images/bigup-web-logo-600.png"
                height="40px"
                margin="20px"
            />
        </a>
        <br />
        <br />
        <h1>Welcome to Bigup Web!</h1>
        <p>
            Here we specialise in making memorable web sites and web apps that just work.
        </p>
        <br />
        <p>
            👷 We have a brand new home in the works, but that doesn't mean we aren't still cooking
            up the web!
        </p>
        <p>
            ✉️ <a href="mailto:jeff@bigupweb.uk">Send us an email</a> so we can get your web idea
            off the ground. 
        </p>
        <p>
            🔗 Bookmark this page to see our new home come to life over the coming weeks.
        </p>

    </main>
}