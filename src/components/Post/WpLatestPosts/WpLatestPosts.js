import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Section from 'components/containers/Section/Section'
import PostItems from 'components/Post/PostItems/PostItems'
import PostItem from 'components/Post/PostItem/PostItem'
import useLatestWpPosts from 'hooks/useWpLatestPosts'
import Button from 'components/Button/Button'
Section

const WpLatestPosts = ( { title, introduction } ) => {
	const latestBlogPost = useLatestWpPosts()
	return (
		<Section>
			<div className="container container_tight">
				{ title || introduction ? (
					<div className="intro_area">
						{ title && (
							<h2>
								{ title }
								<span>.</span>
							</h2>
						) }
						{ introduction && <p>{ introduction }</p> }
					</div>
				) : null }

				<PostItems>
					{ latestBlogPost.map( ( node, index ) => {
						return <PostItem key={ index } node={ node } />
					} ) }
				</PostItems>
				<div className="learn_more">
					<Button text="All Blog Posts" as={ Link } to="/blog" />
				</div>
			</div>
		</Section>
	)
}

WpLatestPosts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string
}

export default WpLatestPosts
