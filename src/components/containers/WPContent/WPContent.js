import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import {
	wPContent
} from './WPContent.module.scss'

const WPContent = ( { children, content } ) => {
	return (
		<div className={ wPContent }>
			{ content && parse( content ) }
			{ children }
		</div>
	)
}

WPContent.propTypes = {
	children: PropTypes.node,
	content: PropTypes.string
}

export default WPContent
