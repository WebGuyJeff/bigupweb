import React from 'react'
import { Link } from 'gatsby'
import PostItems from '../PostItems/PostItems'
import WpPostItem from '../WpPostItem/WpPostItem'
import useLatestWpPosts from '../../../hooks/useWpLatestPosts'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

/**
 * WpLatestPosts Section
 *
 * @param {string} title (passed in context)
 * @param {string} introduction (passed in context)
 * @returns Latest posts section component.
 *
 */
const WpLatestPosts = ( { title, introduction } ) => {
	const latestBlogPost = useLatestWpPosts()
	return (
		<section>
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
						return <WpPostItem key={ index } node={ node } />
					} ) }
				</PostItems>
				<div className="learn_more">
					<Button text="All Blog Posts" as={ Link } to="/blog" />
				</div>
			</div>
		</section>
	)
}

WpLatestPosts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string,
}

export default WpLatestPosts
