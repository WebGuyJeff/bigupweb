import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/Button'
import WpLatestPosts from '../components/Post/WpLatestPosts'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

import { blogsingle } from './WpPostTemplate.module.scss'

const WpPostTemplate = ( { title, date, content } ) => {
	return (
		<>
			<section>
				<article className={ blogsingle }>
					{ title && <h1 className={ blogsingle.__title }>{ title }</h1> }
					{ date && (
						<p className="blogsingle__date">Posted on { date }</p>
					) }
					{ content && (
						<div className="blogsingle__content">
							<div className="blogsingle__back">
								{ parse( content ) }

								<Button
									to="/blog"
									text="Back to Blog"
									as={ Link }
								/>
							</div>
						</div>
					) }
				</article>
			</section>
			<WpLatestPosts title="Further reading from WordPress" />
		</>
	)
}

WpPostTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	excerpt: PropTypes.string,
	content: PropTypes.string.isRequired,
}

export default WpPostTemplate
