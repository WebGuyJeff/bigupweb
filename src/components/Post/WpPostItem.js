import * as React from "react"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PostItemStyles } from "./PostStyles"
import PropTypes from "prop-types"

const WpPostItem = ({ node }, key) => {
	const { title, slug, excerpt, date, featuredImage } = node
	const uri = `/blog/` + slug
	const image = featuredImage
		? getImage(featuredImage.node.localFile.childImageSharp)
		: null
	const altText = featuredImage ? featuredImage.node.altText : ""
	return (
		<PostItemStyles key={key} to={uri}>
			{featuredImage && (
				<GatsbyImage
					className="blogitem__img"
					image={image}
					alt={altText || title}
				/>
			)}
			<div className="blogitem__content">
				<h4>{title}</h4>
				{excerpt && (
					<div dangerouslySetInnerHTML={{ __html: excerpt }} />
				)}
				<div className="blogitem__meta">
					<Button as="span" text="Read More" arrow={true} />
					<p>{date}</p>
				</div>
			</div>
		</PostItemStyles>
	)
}

WpPostItem.propTypes = {
	node: PropTypes.object,
}

export default WpPostItem
