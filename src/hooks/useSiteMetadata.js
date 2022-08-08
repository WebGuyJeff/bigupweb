import { useStaticQuery, graphql } from 'gatsby'

export const UseSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SiteMetaData {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						developerName
						developerUrl
						facebookUsername
						instagramUsername
						linkedinUsername
						twitterUsername
					}
				}
			}
		`
	)

	return site.siteMetadata
}
