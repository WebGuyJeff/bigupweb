import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from '../../components/HeadMeta'
import Layout from '../../components/Layout/Layout'
import WpPostTemplate from '../../templates/WpPostTemplate'

export const Head = ( { pageContext } ) => {
	const { title, excerpt } = pageContext
	return (
		<HeadMeta
			title={ title }
			description={ excerpt }
		/>
	)
}

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
	data: PropTypes.object.isRequired
}

Head.propTypes = {
	pageContext: PropTypes.object.isRequired,
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

export default WpPost
