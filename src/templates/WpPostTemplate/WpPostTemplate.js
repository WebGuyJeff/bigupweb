import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TitleBanner from 'components/banners/TitleBanner/TitleBanner'
import Section from 'components/containers/Section/Section'
import Button from 'components/buttons/Button/Button'
import LatestPosts from 'components/post/LatestPosts/LatestPosts'
import WPContent from 'components/containers/WPContent/WPContent'
import {
	wpPostTemplate
} from './WpPostTemplate.module.scss'

const WpPostTemplate = ( { title, date, content } ) => {
	return (
		<>
			<article className={ wpPostTemplate }>
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
							</Link>
						</WPContent>
						<Button text="Back to Blog" />
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
