import React from 'react'
import PropTypes from 'prop-types'
import {
	buttonGroup,
	buttonGroupColumn,
	buttonGroupEnd,
	buttonGroupCentre
} from './ButtonGroup.module.scss'

const ButtonGroup = ( { children, direction, justify } ) => {
	let classes = buttonGroup
	classes += 'column' === direction ? `${ ' ' + buttonGroupColumn }` :
		'end' === justify ? `${ ' ' + buttonGroupEnd }` :
			'centre' === justify ? `${ ' ' + buttonGroupCentre }` : ''

	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

ButtonGroup.propTypes = {
	direction: PropTypes.string,
	justify: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default ButtonGroup
