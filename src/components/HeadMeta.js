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
	const { siteDesc, siteTitle, siteUrl, image, twitterUsername } =
		site.siteMetadata
	return (
		<>
			<title>{ `${title} | ${siteTitle}` }</title>

			<meta name="description" content={ description || siteDesc } />
			<meta name="image" content={ image } />

			{ /* Facebook Card */ }
			<meta property="og:url" content={ siteUrl } />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={ siteTitle } />
			<meta property="og:description" content={ siteDesc } />
			<meta property="og:image" content={ `${siteUrl}${image}` } />
			<meta property="og:image" content="400" />
			<meta property="og:image:height" content="300" />

			{ /* Twitter Card */ }
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={ twitterUsername } />
			<meta name="twitter:title" content={ siteTitle } />
			<meta name="twitter:description" content={ siteDesc } />
			<meta name="twitter:image" content={ `${siteUrl}${image}` } />
		</>
	)
}

HeadMeta.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default HeadMeta
