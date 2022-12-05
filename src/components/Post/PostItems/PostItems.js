import * as React from 'react'
import PropTypes from 'prop-types'
import { posts } from './PostItems.module.scss'

const PostItems = ( { children } ) => {
	return <div className={ posts }>{ children }</div>
}

PostItems.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PostItems