import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import parse from 'html-react-parser'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import useWpAllPost from 'hooks/useWpAllPosts'
import HeadMeta from 'components/HeadMeta'
import LandingLayout from 'components/Layout/LandingLayout/LandingLayout'
import HeroBanner from 'components/banners/HeroBanner/HeroBanner'
import Section from 'components/containers/Section/Section'
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
				<HeroBanner
					title={ title }
					subheading={ excerptHTML }
					image={ headerImage }
					altText={ headerImageAlt }
				/>
				{ contentHTML && (
					<Section>
						{ parse( contentHTML ) }
					</Section>
				) }
				<Section>
					<PostFeed posts={ useWpAllPost() }/>
				</Section>
			</LandingLayout>
		</>
	)
}

export const Head = ( data ) => headMeta( data )

export default Blog