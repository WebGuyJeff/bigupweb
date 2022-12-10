import { graphql, useStaticQuery } from 'gatsby'

const useWpAllPosts = () => {
	const {
		allWpPost: { nodes },
	} = useStaticQuery( graphql`
		query {
			allWpPost(sort: {date: DESC}, limit: 3) {
			nodes {
				title
				slug
				date(formatString: "DD MMMM YYYY")
				excerpt
				featuredImage {
				node {
					altText
					localFile {
					childImageSharp {
						gatsbyImageData(width: 1000, placeholder: BLURRED,
		formats: [AUTO, WEBP, AVIF])
					}
					}
				}
				}
			}
			}
		}
	` )
	return nodes
}
export default useWpAllPosts
