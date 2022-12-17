import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import Layout from 'components/Layout/Layout'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import WpPostFeed from 'components/WpPostFeed/WpPostFeed'

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
	const { title, excerpt, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const headerImageAlt = featuredImage ? featuredImage.node.altText : ''
	return (
		<>
			<Layout>
				<HeroBanner image={ headerImage } altText={ headerImageAlt }>
					<h1>
						{ title }
						<span style={ { color: 'var( --colourPrimary )' } }>.</span>
					</h1>
					{ excerpt && (
						<div className="bannerContent">
							{ parse( excerpt ) }
						</div>
					) }
				</HeroBanner>
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
