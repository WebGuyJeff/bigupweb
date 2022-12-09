import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const siteData = useStaticQuery(
	graphql`
		query {
			site {
				siteMetadata {
					title
					description
					image
					siteUrl
					twitterUsername
				}
			}
		}
	`
)

const HeadMeta = ( { passedTitle, passedDescription } ) => {
	const { title, description, image, siteUrl, twitterUsername } = siteData.site.siteMetadata
	const metaTitle = passedTitle || title
	const metaDesc  = passedDescription || description

	return (
		<>
			<title id="meta-title">{ metaTitle }</title>

			<meta id="meta-description" name="description" content={ metaDesc } />
			<meta id="meta-image" name="image" content={ image } />

			<meta id="meta-og-url" property="og:url" content={ siteUrl } />
			<meta id="meta-og-type" property="og:type" content="website" />
			<meta id="meta-og-title" property="og:title" content={ metaTitle } />
			<meta id="meta-og-description" property="og:description" content={ metaDesc } />
			<meta id="meta-og-image" property="og:image" content={ `${siteUrl}${image}` } />

			<meta id="meta-twitter-card" name="twitter:card" content="summary_large_image" />
			<meta id="meta-twitter-creator" name="twitter:creator" content={ twitterUsername } />
			<meta id="meta-twitter-title" name="twitter:title" content={ metaTitle } />
			<meta id="meta-twitter-description" name="twitter:description" content={ metaDesc } />
			<meta id="meta-twitter-image" name="twitter:image" content={ `${siteUrl}${image}` } />
		</>
	)
}

HeadMeta.propTypes = {
	passedTitle: PropTypes.string,
	passedDescription: PropTypes.string
}

export default HeadMeta