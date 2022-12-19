import * as React from 'react'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import PropTypes from 'prop-types'

const HeadMeta = ( { pageTitle, pageDescription } ) => {
	const {
		title,
		description,
		image,
		siteUrl,
		twitterUsername
	} = useSiteMetadata()
	const metaTitle = pageTitle.replace( /<[^>]+>/g, '' ) || title
	const metaDesc  = pageDescription.replace( /<[^>]+>/g, '' ) || description

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

export default HeadMeta


HeadMeta.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	pageDescription: PropTypes.string.isRequired
}