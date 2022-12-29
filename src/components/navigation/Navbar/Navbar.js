import React from 'react'
import { menuItems } from 'src/utils/constants'
import { Link } from 'gatsby'
import {
	navbar
} from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={ navbar }>
			{ menuItems.map( ( node, index ) => {
				return (
					<Link
						key={ index }
						to={ node.uri }
						activeClassName="menu_item--active"
					>
						{ node.label }
					</Link>
				)
			} ) }
		</nav>
	)
}

export default Navbar
