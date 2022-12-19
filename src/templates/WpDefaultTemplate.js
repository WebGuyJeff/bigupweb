import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import Fullstop from 'components/Fullstop/Fullstop'

const DefaultTemplate = ( { title, excerpt, content, featuredImage } ) => {
	const headerImage = ( null !== featuredImage )
		? getImage( featuredImage.node.localFile.childImageSharp )
		: ''
	const headerImageAlt = ( '' !== headerImage )
		? featuredImage.node.altText
		: ''

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
				<div className="wpPageContent">
					<div
						className="container container_tight"
						dangerouslySetInnerHTML={ { __html: content } }
					/>
				</div>
			</DefaultLayout>
		</>
	)
}

DefaultTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	featuredImage: PropTypes.object.isRequired
}

export default DefaultTemplate
