import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/Layout/Layout'
import HeadMeta from '../components/HeadMeta'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'

const DefaultTemplate = ( wpPage ) => {

	const featuredImage = ( null !== wpPage.featuredImage )
		? getImage( wpPage.featuredImage.node.localFile.childImageSharp )
		: ''
	const altText = ( '' !== featuredImage )
		? wpPage.featuredImage.node.altText
		: null

	const { title, content } = wpPage
	return (
		<>
			<Layout>
				<SimpleBanner
					title={ title }
					content={ content }
					image={ featuredImage }
					alt={ altText }
				/>
				<div className="wpPageContent">
					<div
						className="container container_tight"
						dangerouslySetInnerHTML={ { __html: content } }
					/>
				</div>
			</Layout>
		</>
	)
}

export function Head() {
	return (
		<HeadMeta
			title={ data.wp.generalSettings.title }
			description={ data.wp.generalSettings.description }
		/>
	)
}

export default DefaultTemplate
