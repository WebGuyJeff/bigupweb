import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import {   
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.scss'
import Footer from "../Footer/Footer"
import parse from "html-react-parser"

const logoRelativePath = "../../../static/logo/bigup-web-logo-wide.png"

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
                        src={logoRelativePath}
                        loading="eager"
                        transformOptions={{ fit: "inside" }}
                        height={logoHeight}
                    />
                </Link>
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
            </header>
            <main>
                {pageTitle && 
					<h1 className={heading}>{pageTitle}</h1>
				}
                {children}
            </main>
			<Footer />
        </div>
    )
}

Layout.propTypes = {
	pageTitle: PropTypes.PropTypes.string,
	children: PropTypes.PropTypes.node.isRequired
}

export default Layout