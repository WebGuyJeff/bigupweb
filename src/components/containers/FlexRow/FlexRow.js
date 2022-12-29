import React from 'react'
import PropTypes from 'prop-types'
import {
	flexRow
} from './FlexRow.module.scss'

const FlexRow = ( { children } ) => {
	return (
		<div className={ flexRow }>
			{ children }
		</div>
	)
}

FlexRow.propTypes = {
	children: PropTypes.node
}

export default FlexRow
