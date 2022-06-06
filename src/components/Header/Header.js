import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {   
    header,
	navLinks,
	navLinkItem,
	navLinkText
} from './Header.module.scss'

const Header = () => {
	const logoRelativePath = "../../../static/logo/bigup-web-logo-wide.png"

    return (
		<header className={header}>
			<Link
				to="/"
				className={navLinkText}>
				<StaticImage
					alt="Bigup Web Logo"
					src={logoRelativePath}
					loading="eager"
					transformOptions={{ fit: "inside" }}
					height="80"
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
    )
}



export default Header
