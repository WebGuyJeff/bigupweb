import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from 'components/HeadMeta'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import WpPostTemplate from 'templates/WpPostTemplate'

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
		<>
			<DefaultLayout>
				<WpPostTemplate { ...wpPost } />
			</DefaultLayout>
		</>
	)
}
Post.propTypes = {
	data: PropTypes.object.isRequired
}

export const Head = ( data ) => headMeta( data )

export default Post