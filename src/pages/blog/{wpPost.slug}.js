import React from "react"
import { graphql } from "gatsby"
import WpPostTemplate from "../../templates/WpPostTemplate"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"
import PropTypes from "prop-types"

const WpPost = ({ data: { wpPost } }) => {
	return (
		<>
			<Seo title={wpPost.title} />
			<Layout>
				<WpPostTemplate {...wpPost} />
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
export default WpPost
