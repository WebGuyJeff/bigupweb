import React from 'react'
import PropTypes from 'prop-types'
import PostItem from 'components/post/PostItem/PostItem'
import MaxWidth from 'components/containers/MaxWidth/MaxWidth'
import {
	postFeed
} from './PostFeed.module.scss'


const PostFeed = ( data ) => {
	const { posts } = data
	return (
		<MaxWidth>
			<div className={ postFeed }>
				{ posts.map( ( node, index ) => {
					return <PostItem node={ node } key={ index } />
				} ) }
			</div>
		</MaxWidth>
	)
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostFeed
