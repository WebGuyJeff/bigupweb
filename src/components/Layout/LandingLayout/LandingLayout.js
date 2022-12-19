import * as React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import {
	container,
	main,
	heading
} from './LandingLayout.module.scss'

const LandingLayout = ( { pageTitle, children } ) => {
	return (
		<div className={ container }>
			<Header position="absolute" />
			
			<main className={ main }>
				{ pageTitle && <h1 className={ heading }>{ parse( pageTitle ) }</h1> }
				{ children }
			</main>
			<Footer />
		</div>
	)
}

LandingLayout.propTypes = {
	pageTitle: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default LandingLayout
