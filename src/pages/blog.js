import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/Layout/Layout'
import HeadMeta from '../components/HeadMeta'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'

export const Head = ( { pageContext } ) => {
	const { title, excerpt } = pageContext
	return (
		<HeadMeta
			title={ title }
			description={ excerpt }
		/>
	)
}

const PostsPage = ( wpPage ) => {
	const { title, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage( featuredImage.node.localFile.childImageSharp.gatsbyImageData )
		: null
	const altText = featuredImage ? featuredImage.node.altText : null
	return (
		<>
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

Head.propTypes = {
	pageContext: PropTypes.object.isRequired,
}

export default PostsPage
