import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import {
	simpleBanner,
	bannerImage,
	container,
	gradient,
	bannerContent,
} from './SimpleBanner.module.scss'

const SimpleBanner = ( { children, title, image, altText, content } ) => {
	return (
		<section className={ simpleBanner }>
			{ image && (
				<GatsbyImage
					className={ bannerImage }
					image={ image }
					alt={ altText }
				/>
			) }
			{ children }

			{ title && (
				<div className={ container }>
					<div className={ bannerContent }>
						<h1>
							{ title  }
							<span style={ { color: 'var( --primary)' } }>.</span>
						</h1>
						{ content && (
							<div
								dangerouslySetInnerHTML={ { __html: content } }
							/>
						) }
					</div>
				</div>
			) }
			<div className={ gradient }></div>
		</section>
	)
}

SimpleBanner.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	image: PropTypes.string,
	altText: PropTypes.string,
	content: PropTypes.string
}

export default SimpleBanner
