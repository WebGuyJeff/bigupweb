import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/SEO'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
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

/**
 * Feed Page Component
 *
 * The data from the page query is passed to the component as data.wpPage. We're destructuring the
 * data object, then using it in our markup.
 *
 */

const FeedTemplate = ( wpPage ) => {
	const { title, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const altText = featuredImage ? featuredImage.node.altText : null
	return (
		<>
			<Seo title={ title } />
			<Layout>
				<SimpleBanner
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

export default FeedTemplate
