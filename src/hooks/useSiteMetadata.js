import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
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