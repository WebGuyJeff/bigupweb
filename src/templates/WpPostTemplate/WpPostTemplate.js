import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TitleBanner from 'components/banners/TitleBanner/TitleBanner'
import Section from 'components/containers/Section/Section'
import Button from 'components/Button/Button'
import LatestPosts from 'components/post/LatestPosts/LatestPosts'
import WPContent from 'components/containers/WPContent/WPContent'

const WpPostTemplate = ( { title, date, content } ) => {

	return (
		<>
			<article>
				<TitleBanner
					title={ title }
					date={ date }
				/>
				{ content && (
					<Section>
						<WPContent content={ content }>
							<Link
								to="/blog"
							>
								<Button text="Back to Blog" />
							</Link>
						</WPContent>
					</Section>
				) }
			</article>
			<LatestPosts title="Further reading from the blog" />
		</>
	)
}

WpPostTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	content: PropTypes.string.isRequired,
	featuredImage: PropTypes.object.isRequired
}

export default WpPostTemplate
