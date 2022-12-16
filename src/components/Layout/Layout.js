import * as React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {
	container,
	main,
	main_container,
	heading
} from './Layout.module.scss'

const Layout = ( { pageTitle, children } ) => {
	return (
		<div className={ container }>
			<Header />
			<main className={ main }>
				{ pageTitle && <h1 className={ heading }>{ parse( pageTitle ) }</h1> }
				{ children }
			</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	pageTitle: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Layout
