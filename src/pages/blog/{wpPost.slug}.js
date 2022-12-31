import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from 'components/HeadMeta'
import SidebarLayout from 'components/Layout/SidebarLayout/SidebarLayout'
import WpPostTemplate from 'templates/WpPostTemplate/WpPostTemplate'

export const data = graphql`
	query wpPostQuery($id: String) {
		wpPost(id: {eq: $id}) {
			title
			excerpt
			content
			date(formatString: "DD MMMM, YYYY")
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

const headMeta = ( { data: { wpPost: { title, excerpt } } } ) => {
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

const Post = ( { data: { wpPost } } ) => {
	return (
		<SidebarLayout>
			<WpPostTemplate { ...wpPost } />
		</SidebarLayout>
	)
}
Post.propTypes = {
	data: PropTypes.object.isRequired
}

export const Head = ( data ) => headMeta( data )

export default Post