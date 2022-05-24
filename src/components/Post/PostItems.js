import * as React from "react"
import { PostItemsStyles } from "./PostStyles"
import PropTypes from "prop-types"

const PostItems = ({ children }) => {
	return <PostItemsStyles>{children}</PostItemsStyles>
}

PostItems.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PostItems
