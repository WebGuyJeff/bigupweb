import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import {
	heroBanner,
	bannerImage,
	bannerContent,
	gradient,
	container
} from './HeroBanner.module.scss'

const HeroBanner = ( { image, altText, children } ) => {

	console.log( children )

	return (
		<section className={ heroBanner }>
			{ image && 
				<GatsbyImage
					className={ bannerImage }
					image={ image }
					alt={ altText }
				/>
			}
			<div className={ container }>
				<div className={ bannerContent }>
					{ children }
				</div>
			</div>
			<div className={ gradient }></div>
		</section>
	)
}

HeroBanner.propTypes = {
	image: PropTypes.string,
	altText: PropTypes.string,
	children: PropTypes.node
}

export default HeroBanner
