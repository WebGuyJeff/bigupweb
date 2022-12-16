import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import {
	heroBanner,
	bannerImage,
	container,
	gradient,
	bannerContent,
} from './HeroBanner.module.scss'

const HeroBanner = ( { children, title, image, altText, content } ) => {
	return (
		<section className={ heroBanner }>
			{ image && 
				<GatsbyImage
					className={ bannerImage }
					image={ image }
					alt={ altText }
				/>
			}
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
						{ children }
					</div>
				</div>
			) }
			<div className={ gradient }></div>
		</section>
	)
}

HeroBanner.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	image: PropTypes.string,
	altText: PropTypes.string,
	content: PropTypes.string
}

export default HeroBanner
