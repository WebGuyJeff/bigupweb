import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import Fullstop from 'components/Fullstop/Fullstop'
import MaxWidth from 'components/containers/MaxWidth/MaxWidth'

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
				<MaxWidth
					dangerouslySetInnerHTML={ { __html: content } }
				/>
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
