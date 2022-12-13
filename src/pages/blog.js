import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import HeadMeta from '../components/HeadMeta'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'

const PostsPage = ( wpPage ) => {
	const { title, excerpt, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const altText = featuredImage ? featuredImage.node.altText : ''
	return (
		<>
			<Layout>
				<SimpleBanner
					title={ title }
					content={ excerpt }
					image={ headerImage }
					alt={ altText }
				/>
				<>
					{ content }
				</>
				<div className="section">
					<div className="feed">
						<WpPostFeed { ...wpPage } />
					</div>
				</div>
			</Layout>
		</>
	)
}


export const Head = ( wpPage ) => {
	const { title, excerpt } = wpPage
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerpt }
		/>
	)
} 

export default PostsPage


Head.propTypes = {
	wpPage: PropTypes.object.isRequired,
}

PostsPage.propTypes = {
	wpPage: PropTypes.node.isRequired
}