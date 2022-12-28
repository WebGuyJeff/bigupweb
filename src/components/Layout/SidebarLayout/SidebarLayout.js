import * as React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import Footer from 'components/Footer/Footer'
import {
	layout,
	main
} from './SidebarLayout.module.scss'

const SidebarLayout = ( { children } ) => {
	return (
		<div className={ layout }>
			<Header />
			<Sidebar>
				<h2>This is a sidebar</h2>
			</Sidebar>
			<main className={ main }>
				{ children }
			</main>
			<Footer />
		</div>
	)
}

SidebarLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default SidebarLayout
