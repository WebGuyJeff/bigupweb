import React from 'react'
import PropTypes from 'prop-types'
import TitleBanner from 'components/banners/TitleBanner/TitleBanner'
import Container from 'components/containers/Container/Container'
import WPContent from 'components/containers/WPContent/WPContent'

const WpPageTemplate = ( { title, excerpt, content } ) => {
	return (
		<>
			<TitleBanner
				title={ title }
				subheading={ excerpt }
			/>
			<Container width="tight" centre pad>
				{ content && (
					<WPContent content={ content } />
				) }
			</Container>
		</>
	)
}

WpPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	featuredImage: PropTypes.object.isRequired
}

export default WpPageTemplate
