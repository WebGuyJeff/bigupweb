import * as React from 'react'
import {
    Link
} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {   
    container,
    heading,
    navLinkText,
    siteTitle
} from './Layout/layout.module.scss'

const Layout = ({ pageTitle, children }) => {

    const logoHeight = 80

    return (
        <div className={container}>
            <header className={siteTitle}>
                <Link
                    to="/"
                    className={navLinkText}>
                    <StaticImage
                        className="logo"
                        alt="Bigup Web Logo"
                        src="../../static/logo/bigup-web-logo-wide.png"
                        loading="eager"
                        transformOptions={{ fit: "inside" }}
                        height={logoHeight}
                    />
                </Link>
            </header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout