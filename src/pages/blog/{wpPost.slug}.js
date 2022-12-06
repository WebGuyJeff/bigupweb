import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from '../../components/HeadMeta'
import Layout from '../../components/Layout/Layout'
import WpPostTemplate from '../../templates/WpPostTemplate'

const WpPost = ( { data: { wpPost } } ) => {
	return (
		<>
			<Layout>
				<WpPostTemplate { ...wpPost } />
			</Layout>
		</>
	)
}

WpPost.propTypes = {
	data: PropTypes.object.isRequired,
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

export function Head() {
	return (
		<HeadMeta
			title={ wpPost.title }
			description={ wpPost.excerpt }
		/>
	)
}

export default WpPost
