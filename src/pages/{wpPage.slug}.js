import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from 'components/HeadMeta'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import WpPageTemplate from 'templates/WpPageTemplate/WpPageTemplate'

const headMeta = ( { data: { wpPage: { title, excerpt } } } ) => {
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerpt }
		/>
	)
}
headMeta.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired
}

const Page = ( { data: { wpPage } } ) => {
	return (
		<DefaultLayout>
			<WpPageTemplate { ...wpPage } />
		</DefaultLayout>
	)
}
Page.propTypes = {
	data: PropTypes.object.isRequired
}

export const data = graphql`
	query wpPageQuery($id: String) {
		wpPage(id: { eq: $id }) {
			template {
				templateName
			}
			title
			excerpt
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

export const Head = ( data ) => headMeta( data )

export default Page
