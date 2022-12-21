import * as React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import {
	layout,
	main,
	heading
} from './DefaultLayout.module.scss'

const DefaultLayout = ( { children } ) => {
	return (
		<div className={ layout }>
			<Header />
			<main className={ main }>
				{ children }
			</main>
			<Footer />
		</div>
	)
}

DefaultLayout.propTypes = {
	pageTitle: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default DefaultLayout
