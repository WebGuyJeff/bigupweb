import React from 'react'
import PropTypes from 'prop-types'
import PostItem from 'components/post/PostItem/PostItem'
import Container from 'components/containers/Container/Container'
import {
	postFeed
} from './PostFeed.module.scss'


const PostFeed = ( data ) => {
	const { posts } = data
	return (
		<Container>
			<div className={ postFeed }>
				{ posts.map( ( node, index ) => {
					return <PostItem node={ node } key={ index } />
				} ) }
			</div>
		</Container>
	)
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostFeed
