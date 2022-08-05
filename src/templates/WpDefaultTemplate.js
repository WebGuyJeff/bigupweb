import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const DefaultTemplate = (wpPage) => {
	const featuredImage = getImage(
		wpPage.featuredImage.node.localFile.childImageSharp
	)
	const { title, content } = wpPage
	return (
		<>
			<Seo title={title} />
			<Layout>
				<SimpleBanner title={title}>
					<GatsbyImage
						className="banner__image"
						image={featuredImage}
					/>
				</SimpleBanner>
				<div className="section">
					<div
						className="container container__tight"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</Layout>
		</>
	)
}

export default DefaultTemplate
