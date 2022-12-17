import React from 'react'
import useAllPost from 'hooks/useWpAllPosts'
import PostItem from 'components/Post/PostItem/PostItem'

const WpPostFeed = () => {
	const allPost = useAllPost()
	return allPost.map( ( node, index ) => {
		return <PostItem key={ index } node={ node } />
	} )
}

export default WpPostFeed
