import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../../components/Logo/Logo'
import {
	header,
	nav,
	navLinks,
	navLinkItem
} from './Header.module.scss'

const Header = () => {

	return (
		<header className={ header }>
			<Logo />
			<nav className={ nav }>
				<div className={ navLinks }>
					<Link to="/" className={ navLinkItem }>
						Home
					</Link>
					<Link to="/about" className={ navLinkItem }>
						About
					</Link>
					<Link to="/blog" className={ navLinkItem }>
						Blog
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
