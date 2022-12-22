import React from 'react'
import PropTypes from 'prop-types'
import FlexRow from 'components/containers/FlexRow/FlexRow'
import PostItem from 'components/post/PostItem/PostItem'

const PostFeed = ( data ) => {
	const { posts } = data
	return (
		<FlexRow>
			{ posts.map( ( node, index ) => {
				return <PostItem node={ node } key={ index } />
			} ) }
		</FlexRow>
	)
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostFeed
