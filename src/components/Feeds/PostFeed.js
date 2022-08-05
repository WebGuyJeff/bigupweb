import React from "react"
import WpPostItem from "../Post/WpPostItem"
import useAllPost from "../../hooks/use-all-blog-post"

const ProductFeed = () => {
	const allPost = useAllPost()

	return allPost.map((node, index) => {
		return <WpPostItem key={index} node={node} />
	})
}

export default ProductFeed
