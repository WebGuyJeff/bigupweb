import * as React from 'react'
import {
    Link
} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {   
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

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
                        src="../images/bigup-web-logo-600.png"
                        loading="eager"
                        transformOptions={{ fit: "inside" }}
                        height={logoHeight}
                    />
                </Link>
            </header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout