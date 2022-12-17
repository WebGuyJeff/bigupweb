import * as React from 'react'
import { Link } from 'gatsby'
import {
	nav,
	navLinkItem
} from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={ nav }>
			<Link to="/" className={ navLinkItem }>
				Home
			</Link>
			<Link to="/about" className={ navLinkItem }>
				About
			</Link>
			<Link to="/blog" className={ navLinkItem }>
				Blog
			</Link>
		</nav>
	)
}

export default Nav
