import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import HeadMeta from '../components/HeadMeta'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'

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
				<section>
					{ content }
				</section>
				<div><span>ANOTHER TEST</span></div>
				<div className="section">
					<div className="feed">
						<WpPostFeed { ...wpPage } />
					</div>
				</div>
			</Layout>
		</>
	)
}
PostsPage.propTypes = {
	wpPage: PropTypes.node.isRequired
}

export const Head = ( data ) => headMeta( data )

export default PostsPage