import { graphql, useStaticQuery } from 'gatsby'

const useWpAllTags = () => {
	const {
		allWpTag: { nodes },
	} = useStaticQuery( graphql`
		query {
			allWpTag {
				nodes {
					name
					uri
					posts {
						nodes {
							slug
						}
					}
				}
			}
		}
	` )
	return nodes
}
export default useWpAllTags
