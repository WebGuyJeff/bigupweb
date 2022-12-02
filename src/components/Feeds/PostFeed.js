import React from 'react'
import useAllPost from '../../hooks/use-all-blog-post'
import WpPostItem from '../Post/WpPostItem'

const ProductFeed = () => {
	const allPost = useAllPost()

	return allPost.map( ( node, index ) => {
		return <WpPostItem key={ index } node={ node } />
	} )
}

export default ProductFeed
