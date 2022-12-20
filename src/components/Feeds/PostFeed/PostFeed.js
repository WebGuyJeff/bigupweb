import React from 'react'
import useWpAllPost from 'hooks/useWpAllPosts'
import RowWrap from 'components/containers/RowWrap/RowWrap'
import PostItem from 'components/post/PostItem/PostItem'

const PostFeed = () => {
	const allWpPost = useWpAllPost()
	return (
		<>
			{ allWpPost.map( ( node, index ) => {
				return <PostItem node={ node } key={ index } />
			} ) }
		</>
	)
}

export default PostFeed