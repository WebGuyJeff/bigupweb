import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import HeadMeta from '../components/HeadMeta'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import WpPostFeed from '../components/Feeds/WpPostFeed'
import JSONData from '../../content/pages/blog/copy.json'

const headMeta = () => {
	const { title, excerpt } = JSONData.pages.blog
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerpt }
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
			<Layout>
				<HeroBanner image={ headerImage } altText={ headerImageAlt }>
					<h1>
						{ title }
						<span style={ { color: 'var( --colourPrimary )' } }>.</span>
					</h1>
					{ excerptHTML && (
						<div className="bannerContent">
							{ parse( excerptHTML ) }
						</div>
					) }
				</HeroBanner>
				{ contentHTML && (
					<section>
						{ parse( contentHTML ) }
					</section>
				) }
				<div className="section">
					<div className="feed">
						<WpPostFeed />
					</div>
				</div>
			</Layout>
		</>
	)
}

export const Head = ( data ) => headMeta( data )

export default Blog