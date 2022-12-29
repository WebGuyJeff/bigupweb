import * as React from 'react'
import PropTypes from 'prop-types'
import TitleBanner from 'components/banners/TitleBanner/TitleBanner'
import MaxWidth from 'components/containers/MaxWidth/MaxWidth'
import WPContent from 'components/containers/WPContent/WPContent'

const WpPageTemplate = ( { title, excerpt, content } ) => {
	return (
		<>
			<TitleBanner
				title={ title }
				subheading={ excerpt }
			/>
			<MaxWidth width="tight">
				{ content && (
					<WPContent content={ content } />
				) }
			</MaxWidth>
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
