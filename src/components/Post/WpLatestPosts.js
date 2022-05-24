import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import WpPostItem from "./WpPostItem"
import useLatestWpPosts from "../../hooks/useWpLatestPosts"
import Button from "../Button/Button"
import PropTypes from "prop-types"

/**
 * WpLatestPosts Section
 *
 * @param {string} title (passed in context)
 * @param {string} introduction (passed in context)
 * @returns Latest posts section component.
 *
 */
const WpLatestPosts = ({ title, introduction }) => {
	const latestBlogPost = useLatestWpPosts()
	return (
		<div className="section">
			<div className="container container__tight">
				{title || introduction ? (
					<div className="intro__area">
						{title && (
							<h2>
								{title}
								<span>.</span>
							</h2>
						)}
						{introduction && <p>{introduction}</p>}
					</div>
				) : null}

				<PostItems>
					{latestBlogPost.map((node, index) => {
						return <WpPostItem key={index} node={node} />
					})}
				</PostItems>
				<div className="learn__more">
					<Button text="All Blog Posts" as={Link} to="/blog" />
				</div>
			</div>
		</div>
	)
}

WpLatestPosts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string,
}

export default WpLatestPosts
