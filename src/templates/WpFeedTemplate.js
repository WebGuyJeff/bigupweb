import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'

const getFeedTemplate = ( wpPage ) => {
	const templateName = wpPage.slug.includes( 'products' ) ? 'products' : ''
	switch ( templateName ) {
	case 'products':
		return <div>No product feed component</div>

	default:
		return <WpPostFeed { ...wpPage } />
	}
}

const FeedTemplate = ( wpPage ) => {
	const { title, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const altText = featuredImage ? featuredImage.node.altText : ''
	return (
		<>
			<Layout>
				<HeroBanner
					title={ title }
					content={ content }
					image={ headerImage }
					alt={ altText }
				/>
				<div className="section">
					<div className="feed">{ getFeedTemplate( wpPage ) }</div>
				</div>
			</Layout>
		</>
	)
}

FeedTemplate.propTypes = {
	wpPage: PropTypes.object.isRequired
}

export default FeedTemplate
