import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/SEO'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'

const PostsPage = ( wpPage ) => {
	const { title, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const altText = featuredImage ? featuredImage.node.altText : null
	return (
		<>
			<Seo title={ title } />
			<Layout>
				<SimpleBanner
					title={ title }
					content={ content }
					image={ headerImage }
					alt={ altText }
				/>
				<div className="section">
					<div className="feed">
						<WpPostFeed { ...wpPage } />
					</div>
				</div>
			</Layout>
		</>
	)
}

export default PostsPage
