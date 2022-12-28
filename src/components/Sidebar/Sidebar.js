import * as React from 'react'
import PropTypes from 'prop-types'
import {
	sidebar
} from './Sidebar.module.scss'

const Sidebar = ( { children } ) => {
	return (
		<aside className={ sidebar }>
			{ children }
		</aside>
	)
}

Sidebar.propTypes = {
	children: PropTypes.node
}

export default Sidebar
