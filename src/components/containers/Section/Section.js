import * as React from 'react'
import PropTypes from 'prop-types'
import {
	section
} from './Section.module.scss'

const Section = ( { children } ) => {
	return (
		<section className={ section }>
			{ children }
		</section>
	)
}

Section.propTypes = {
	children: PropTypes.node
}

export default Section
