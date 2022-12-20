import * as React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import {
	layout,
	main,
	heading
} from './LandingLayout.module.scss'

const LandingLayout = ( { children } ) => {
	return (
		<div className={ layout }>
			<Header position="absolute" />
			<main className={ main }>
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
