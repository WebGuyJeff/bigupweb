import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				image
				author
				siteUrl
				twitterUsername
			}
		}
	}
`

const HeadMeta = ( { title, description } ) => {
	const { site } = useStaticQuery( getData )
	const { siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata
	return (
		<>
			<title id="meta-title">{ `${title} | ${siteTitle}` }</title>

			<meta id="meta-description" name="description" content={ description || siteDesc } />
			<meta id="meta-image" name="image" content={ image } />

			{ /* Facebook Card */ }
			<meta id="meta-og-url" property="og:url" content={ siteUrl } />
			<meta id="meta-og-type" property="og:type" content="website" />
			<meta id="meta-og-title" property="og:title" content={ siteTitle } />
			<meta id="meta-og-description" property="og:description" content={ siteDesc } />
			<meta id="meta-og-image" property="og:image" content={ `${siteUrl}${image}` } />

			{ /* Twitter Card */ }
			<meta id="meta-twitter-card" name="twitter:card" content="summary_large_image" />
			<meta id="meta-twitter-creator" name="twitter:creator" content={ twitterUsername } />
			<meta id="meta-twitter-title" name="twitter:title" content={ siteTitle } />
			<meta id="meta-twitter-description" name="twitter:description" content={ siteDesc } />
			<meta id="meta-twitter-image" name="twitter:image" content={ `${siteUrl}${image}` } />
		</>
	)
}

HeadMeta.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default HeadMeta
