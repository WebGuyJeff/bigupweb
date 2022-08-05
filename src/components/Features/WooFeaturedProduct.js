import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {   
    wooFeaturedProduct,
	featuresItemImg,
	featuresItemContent
} from './WooFeaturedProduct.module.scss'
import PropTypes from 'prop-types'

const WooFeaturedProduct = ({ feature }) => {
	const { slug, headerImage, name, short_description } = feature
	const gatsbyPath = `/products/` + slug
	const image = headerImage
		? getImage(headerImage[0].localFile.childImageSharp)
		: null
	const altText = headerImage ? headerImage[0].alt : ""
	return (
		<section className={wooFeaturedProduct}>
			<Link to={gatsbyPath}>
				<GatsbyImage
					className={featuresItemImg}
					image={image}
					alt={altText}
				/>
				{name && short_description && (
					<div className={featuresItemContent}>
						{name && <h4>{name}</h4>}
						{short_description && (
							<div
								dangerouslySetInnerHTML={{
									__html: short_description,
								}}
							/>
						)}
						<Button text="Read More" as="span" arrow={true} />
					</div>
				)}
			</Link>
		</section>
	)
}

WooFeaturedProduct.propTypes = {
	feature: PropTypes.object
}

export default WooFeaturedProduct
