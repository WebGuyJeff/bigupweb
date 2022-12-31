import React from 'react'
import PropTypes from 'prop-types'
import {
	container,
	widthTight,
	centered,
	padded
} from './Container.module.scss'

const Container = ( { children, width, centre, pad } ) => {
	let classes = container
	classes += `${ ( 'tight' === width ) ? ' ' + widthTight : '' }`
	classes += `${ centre ? ' ' + centered : '' }`
	classes += `${ pad ? ' ' + padded : '' }`

	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string,
	centre: PropTypes.bool,
	pad: PropTypes.bool
}

export default Container
