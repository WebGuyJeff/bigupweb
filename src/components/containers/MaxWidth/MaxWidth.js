import * as React from 'react'
import PropTypes from 'prop-types'
import {
	maxWidth
} from './MaxWidth.module.scss'

const MaxWidth = ( { children } ) => {
	return (
		<div className={ maxWidth }>
			{ children }
		</div>
	)
}

MaxWidth.propTypes = {
	children: PropTypes.node
}

export default MaxWidth
