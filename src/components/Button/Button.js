import React from 'react'
import PropTypes from 'prop-types'
import { MdArrowForward as Arrow } from 'react-icons/md'
import { button } from './Button.module.scss'

const Button = ( { text, arrow } ) => {
	return (
		<button className={ button } >
			{ text }
			{ arrow ? <Arrow style={ { marginLeft: '10px' } } /> : null }
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	arrow: PropTypes.bool
}

export default Button
