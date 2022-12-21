import * as React from 'react'
import PropTypes from 'prop-types'
import {
	maxWidth,
	maxWidth_tight
} from './MaxWidth.module.scss'

const MaxWidth = ( { children, width } ) => {
	const classes = ( 'tight' === width ) ? maxWidth_tight : maxWidth
	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

MaxWidth.propTypes = {
	width: PropTypes.string,
	children: PropTypes.node
}

export default MaxWidth
