import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import {
	layout,
	main
} from './DefaultLayout.module.scss'

const DefaultLayout = ( { children } ) => {
	return (
		<div className={ layout }>
			<Header sticky />
			<main className={ main }>
				{ children }
			</main>
			<Footer />
		</div>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default DefaultLayout
