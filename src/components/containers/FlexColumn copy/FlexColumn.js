import * as React from 'react'
import PropTypes from 'prop-types'
import {
	flexColumn
} from './FlexColumn.module.scss'

const FlexColumn = ( { children } ) => {
	return (
		<div className={ flexColumn }>
			{ children }
		</div>
	)
}

FlexColumn.propTypes = {
	children: PropTypes.node
}

export default FlexColumn
