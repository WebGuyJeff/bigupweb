import * as React from 'react'
import { Link } from 'gatsby'
import {
	nav
} from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={ nav }>
			<Link to="/">
				Home
			</Link>
			<Link to="/about">
				About
			</Link>
			<Link to="/blog">
				Blog
			</Link>
		</nav>
	)
}

export default Nav
