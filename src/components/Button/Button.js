import React from 'react'
import PropTypes from 'prop-types'
import { MdArrowForward as Arrow } from 'react-icons/md'
import {
	button,
	buttonPrimary,
	buttonSecondary,
	buttonOutline
} from './Button.module.scss'

const Button = ( { text, style, arrow } ) => {
	let classes = button
	classes += 'primary' === style ? `${ ' ' + buttonPrimary }` :
		'secondary' === style ? `${ ' ' + buttonSecondary }` :
			'outline' === style ? `${ ' ' + buttonOutline }` : ''

	return (
		<button className={ classes } >
			{ text }
			{ arrow ? <Arrow style={ { marginLeft: '10px' } } /> : null }
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	style: PropTypes.string,
	arrow: PropTypes.bool
}

export default Button
