import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import WpLatestPosts from "../components/Post/WpLatestPosts"


import {
	blogsingle
} from './WpPostTemplate.module.scss'

console.log(blogsingle)


const WpPostTemplate = (wordpressPost) => {

const { 
	title,
	date,
	excerpt,
	content
} = wordpressPost

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

export default WpPostTemplate
