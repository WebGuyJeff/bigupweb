import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import WpLatestPosts from "../components/Post/WpLatestPosts"
import PropTypes from "prop-types"

import {
	blogsingle
} from './WpPostTemplate.module.scss'


const WpPostTemplate = ( { title, date, excerpt, content } ) => {

	return (
		<>
			<section>
				<article className={blogsingle}>
					{title && <h1 className={blogsingle.__title}>{title}</h1>}
					{date && (
						<p className="blogsingle__date">Posted on {date}</p>
					)}
					{content && (
						<article className="blogsingle__content">
							<div
								dangerouslySetInnerHTML={{ __html: content }}
							/>

							<div className="blogsingle__back">
								<Button
									to="/blog"
									text="Back to Blog"
									as={Link}
								/>
							</div>
						</article>
					)}
				</article>
			</section>
			<WpLatestPosts title="Further reading from WordPress" />
		</>
	)
}

WpPostTemplate.propTypes = {
	title:   PropTypes.string.isRequired,
	date:    PropTypes.string,
	excerpt: PropTypes.string,
	content: PropTypes.string.isRequired
}

export default WpPostTemplate
