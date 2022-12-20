import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import Fullstop from 'components/Fullstop/Fullstop'
import Section from 'components/containers/Section/Section'
import RowWrap from 'components/containers/RowWrap/RowWrap'
import PostFeed from 'components/Feeds/PostFeed/PostFeed'

const FeedTemplate = ( wpPage ) => {
	const { title, excerpt, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const headerImageAlt = featuredImage ? featuredImage.node.altText : ''
	return (
		<>
			<DefaultLayout>
				<HeroBanner image={ headerImage } altText={ headerImageAlt }>
					<h1>
						{ title }
						<Fullstop />
					</h1>
					{ excerpt && (
						<div className="bannerContent">
							{ parse( excerpt ) }
						</div>
					) }
				</HeroBanner>
				<Section>
					<RowWrap>
						<PostFeed />
					</RowWrap>
				</Section>
			</DefaultLayout>
		</>
	)
}

FeedTemplate.propTypes = {
	wpPage: PropTypes.object.isRequired
}

export default FeedTemplate
