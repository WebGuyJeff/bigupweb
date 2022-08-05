import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {   
    header,
	nav,
	navLinks,
	navLinkItem
} from './Header.module.scss'

const Header = () => {
	const logoRelativePath = "../../../static/logo/bigup-web-logo-wide.png"

    return (
		<header className={header}>
			<Link
				to="/"
				className={navLinkItem}>
				<StaticImage
					alt="Bigup Web Logo"
					src={logoRelativePath}
					loading="eager"
					transformOptions={{ fit: "inside" }}
					height="80"
				/>
			</Link>
			<nav className={nav}>
				<div className={navLinks}>
					<Link to="/" className={navLinkItem}>
						Home
					</Link>
					<Link to="/about" className={navLinkItem}>
						About
					</Link>
					<Link to="/blog" className={navLinkItem}>
						Blog
					</Link>
				</div>
			</nav>
		</header>
    )
}

export default Header
