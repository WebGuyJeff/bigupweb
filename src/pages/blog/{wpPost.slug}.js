import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from 'components/HeadMeta'
import Layout from 'components/Layout/Layout'
import WpPostTemplate from 'templates/WpPostTemplate'

const WpPost = ( { data: { wpPost } } ) => {
	return (
		<>
			<Layout>
				<WpPostTemplate { ...wpPost } />
			</Layout>
		</>
	)
}

export const data = graphql`
	query wpPostQuery($id: String) {
		wpPost(id: { eq: $id }) {
			title
			excerpt
			content
			date(formatString: "DD MMMM, YYYY")
		}
	}
`

export const Head = ( { data: { wpPostQuery } } ) => {
	const { title, excerpt } = wpPostQuery
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerpt }
		/>
	)
} 

export default WpPost


WpPost.propTypes = {
	data: PropTypes.node.isRequired
}

Head.propTypes = {
	data: PropTypes.object.isRequired,
}