import * as React from 'react'
import { MdArrowForward as Arrow } from 'react-icons/md'
import PropTypes from 'prop-types'
import { button } from './Button.module.scss'

const Button = ( { text, to, as, arrow } ) => {
	return (
		<button className={ button } as={ as } to={ to }>
			{ text }
			{ arrow || to ? <Arrow style={ { marginLeft: '10px' } } /> : null }
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	as: PropTypes.string,
	arrow: PropTypes.bool,
}

export default Button
