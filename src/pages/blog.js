import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import HeadMeta from 'components/HeadMeta'
import LandingLayout from 'components/Layout/LandingLayout/LandingLayout'
import HeroBanner from 'components/HeroBanner/HeroBanner'
import Fullstop from 'components/Fullstop/Fullstop'
import Section from 'components/containers/Section/Section'
import RowWrap from 'components/containers/RowWrap/RowWrap'
import PostFeed from 'components/Feeds/PostFeed/PostFeed'
import JSONData from 'root/content/pages/blog/copy.json'

const headMeta = () => {
	const { title, excerptHTML } = JSONData.pages.blog
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerptHTML }
		/>
	)
}
headMeta.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired
}

const Blog = () => {
	const { title, excerptHTML, contentHTML, headerImageAlt } = JSONData.pages.blog
	const { allFile: { nodes } } = useStaticQuery( graphql`
		query {
			allFile( filter: { relativeDirectory: { eq: "pages/blog/headerImage" } }, limit: 1 ) {
				nodes {
					childImageSharp {
						gatsbyImageData(
							width: 1920
						)
					}
				}
			}
		}
	` )
	const headerImage = getImage( nodes[ 0 ] )
	return (
		<>
			<LandingLayout >
				<HeroBanner image={ headerImage } altText={ headerImageAlt }>
					<h1>
						{ title }
						<Fullstop />
					</h1>
					{ excerptHTML && (
						<div className="bannerContent">
							{ parse( excerptHTML ) }
						</div>
					) }
				</HeroBanner>
				{ contentHTML && (
					<Section>
						{ parse( contentHTML ) }
					</Section>
				) }
				<Section>
					<RowWrap>
						<PostFeed />
					</RowWrap>
				</Section>
			</LandingLayout>
		</>
	)
}

export const Head = ( data ) => headMeta( data )

export default Blog