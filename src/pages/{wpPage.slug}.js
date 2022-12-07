import React from 'react'
import { graphql } from 'gatsby'
import HeadMeta from '../components/HeadMeta'
import DefaultTemplate from '../templates/WpDefaultTemplate'
import FeedTemplate from '../templates/WpFeedTemplate'
import PropTypes from 'prop-types'

export const Head = ( { pageContext } ) => {
	const { title, excerpt } = pageContext

	Head.propTypes = {
		pageContext: PropTypes.object.isRequired,
	}

	return (
		<HeadMeta
			title={ title }
			description={ excerpt }
		/>
	)
}

const getPageTemplate = ( wpPage ) => {
	const templateName = wpPage.template.templateName
	switch ( templateName ) {
	case 'Feed':
		return <FeedTemplate { ...wpPage } />

	default:
		return <DefaultTemplate { ...wpPage } />
	}
}

const Page = ( { data: { wpPage } } ) => {
	return <main>{ getPageTemplate( wpPage ) }</main>
}

getPageTemplate.propTypes = {
	wpPage: PropTypes.object.isRequired,
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
