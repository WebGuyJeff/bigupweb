import React from 'react'
import useWpAllPost from 'hooks/useWpAllPosts'
import RowWrap from 'components/containers/RowWrap/RowWrap'
import WpPostItem from 'components/Post/WpPostItem/WpPostItem'

const PostFeed = () => {
	const allWpPost = useWpAllPost()
	return (
		<RowWrap>
			{ allWpPost.map( ( node, index ) => {
				return <WpPostItem node={ node } key={ index } />
			} ) }
		</RowWrap>
	)
}

export default PostFeed