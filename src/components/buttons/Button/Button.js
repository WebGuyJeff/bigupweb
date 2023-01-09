import React from 'react'
import PropTypes from 'prop-types'
import { MdArrowForward as Arrow } from 'react-icons/md'
import {
	button,
	buttonPrimary,
	buttonSecondary,
	buttonOutline
} from './Button.module.scss'

const Button = ( { type, id, text, style, arrow, onClick, disabled } ) => {
	let classes = button
	classes += 'primary' === style ? `${ ' ' + buttonPrimary }` :
		'secondary' === style ? `${ ' ' + buttonSecondary }` :
			'outline' === style ? `${ ' ' + buttonOutline }` : ''

	return (
		<button
			id={ id }
			className={ classes }
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ text }
			{ arrow ? <Arrow style={ { marginLeft: '10px' } } /> : null }
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	text: PropTypes.string,
	style: PropTypes.string,
	arrow: PropTypes.bool,
	onClick: PropTypes.func,
	disabled: PropTypes.bool
}

export default Button
