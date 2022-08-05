import { graphql, useStaticQuery } from "gatsby"

const useWpAllPosts = () => {
	const {
		allWpPost: { nodes },
	} = useStaticQuery(graphql`
		query wpAllBlogLinksQuery {
			allWpPost(sort: { fields: date, order: DESC }) {
				nodes {
					title
					slug
					date(formatString: "DD MMMM YYYY")
					excerpt
					content
					featuredImage {
						node {
							altText
							localFile {
								childImageSharp {
									gatsbyImageData(
										width: 1000
										placeholder: BLURRED
										formats: [AUTO, WEBP, AVIF]
									)
								}
							}
						}
					}
				}
			}
		}
	`)
	return nodes
}
export default useWpAllPosts
