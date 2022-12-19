import * as React from 'react'
import PropTypes from 'prop-types'
import {
	rowWrap
} from './RowWrap.module.scss'

const RowWrap = ( { children } ) => {
	return (
		<div className={ rowWrap }>
			{ children }
		</div>
	)
}

RowWrap.propTypes = {
	children: PropTypes.node
}

export default RowWrap
