import { graphql, useStaticQuery } from "gatsby"

const useWooAllProducts = () => {
	const {
		allWcProducts: { nodes },
	} = useStaticQuery(graphql`
		query allWooProductLinksQuery {
			allWcProducts(sort: { fields: date_created, order: DESC }) {
				nodes {
					name
					slug
					short_description
					sku
					price
					description
					headerImage: images {
						alt
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
	`)

	return nodes
}

export default useWooAllProducts
