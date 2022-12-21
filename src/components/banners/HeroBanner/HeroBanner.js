import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import Fullstop from 'components/Fullstop/Fullstop'
import {
	heroBanner,
	bannerImage,
	bannerContent,
	gradient,
	container
} from './HeroBanner.module.scss'

const HeroBanner = ( { title, subheading, image, altText, children } ) => {

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
					<h1>
						{ title }
						<Fullstop />
					</h1>
					{ subheading && parse( subheading ) }
					{ children }
				</div>
			</div>
			<div className={ gradient }></div>
		</section>
	)
}

HeroBanner.propTypes = {
	title: PropTypes.string,
	subheading: PropTypes.string,
	image: PropTypes.object,
	altText: PropTypes.string,
	children: PropTypes.node
}

export default HeroBanner
