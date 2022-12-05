import React from 'react'
import useAllPost from '../../hooks/useWpAllPosts'
import WpPostItem from '../Post/WpPostItem/WpPostItem'

const WpPostFeed = () => {
	const allPost = useAllPost()
	return allPost.map( ( node, index ) => {
		return <WpPostItem key={ index } node={ node } />
	} )
}

export default WpPostFeed
