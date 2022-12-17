import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import Layout from 'components/Layout/Layout'
import HeroBanner from 'components/HeroBanner/HeroBanner'

const DefaultTemplate = ( wpPage ) => {

	const headerImage = ( null !== wpPage.featuredImage )
		? getImage( wpPage.featuredImage.node.localFile.childImageSharp )
		: ''
	const headerImageAlt = ( '' !== headerImage )
		? wpPage.featuredImage.node.altText
		: ''

	const { title, excerpt, content } = wpPage
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
				<div className="wpPageContent">
					<div
						className="container container_tight"
						dangerouslySetInnerHTML={ { __html: content } }
					/>
				</div>
			</Layout>
		</>
	)
}

DefaultTemplate.propTypes = {
	wpPage: PropTypes.node.isRequired
}

export default DefaultTemplate
