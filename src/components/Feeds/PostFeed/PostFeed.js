import React from 'react'
import PropTypes from 'prop-types'
import PostItem from 'components/post/PostItem/PostItem'
import RowWrap from 'components/containers/RowWrap/RowWrap'

const PostFeed = ( data ) => {
	const { posts } = data
	return (
		<RowWrap>
			{ posts.map( ( node, index ) => {
				return <PostItem node={ node } key={ index } />
			} ) }
		</RowWrap>
	)
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostFeed
