import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/WpDefaultTemplate"
import FeedTemplate from "../templates/WpFeedTemplate"
import PropTypes from "prop-types"

const getPageTemplate = (wpPage) => {
	const templateName = wpPage.template.templateName
	switch (templateName) {
		case "Feed":
			return <FeedTemplate {...wpPage} />

		default:
			return <DefaultTemplate {...wpPage} />
	}
}

getPageTemplate.propTypes = {
	wpPage: PropTypes.object.isRequired,
}

const Page = ({ data: { wpPage } }) => {
	return <main>{getPageTemplate(wpPage)}</main>
}

Page.propTypes = {
	data: PropTypes.object.isRequired,
}

export const data = graphql`
	query wpPageQuery($id: String) {
		wpPage(id: { eq: $id }) {
			template {
				templateName
			}
			title
			content
			slug
			featuredImage {
				node {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(
								layout: FULL_WIDTH
								formats: [AUTO, WEBP, AVIF]
								placeholder: BLURRED
							)
						}
					}
				}
			}
		}
	}
`

export default Page
