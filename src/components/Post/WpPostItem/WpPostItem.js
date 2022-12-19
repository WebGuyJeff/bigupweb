import * as React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
	blogitem
} from './WpPostItem.module.scss'

const WpPostItem = ( { node: { title, slug, excerpt, date, featuredImage } }, key ) => {
	const uri = '/blog/' + slug
	const image = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp )
		: null
	const altText = featuredImage ? featuredImage.node.altText : ''
	return (
		<div
			className={ blogitem }
			key={ key }
			to={ uri }
		>
			{ featuredImage && (
				<GatsbyImage
					className="blogitem_img"
					image={ image }
					alt={ altText || title }
				/>
			) }
			<div className="blogitem_content">
				<h4>{ title }</h4>
				{ excerpt && (
					<div dangerouslySetInnerHTML={ { __html: excerpt } } />
				) }
				<div className="blogitem_meta">
					<Button as="span" text="Read More" arrow={ true } />
					<p>{ date }</p>
				</div>
			</div>
		</div>
	)
}

WpPostItem.propTypes = {
	node: PropTypes.object.isRequired
}

export default WpPostItem
