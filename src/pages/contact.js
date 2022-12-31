import React from 'react'
import parse from 'html-react-parser'
import { getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import LandingLayout from 'components/Layout/LandingLayout/LandingLayout'
import HeroBanner from 'components/banners/HeroBanner/HeroBanner'
import Container from 'components/containers/Container/Container'
import ContactForm from 'components/forms/ContactForm/ContactForm'
import HeadMeta from 'components/HeadMeta'
import JSONData from 'root/content/language/english.json'

const headMeta = () => {
	const { title, excerptHTML } = JSONData.pages.contact
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ excerptHTML }
		/>
	)
}
headMeta.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

const Contact = () => {
	const { title, excerptHTML, contentHTML, headerImageAlt } = JSONData.pages.contact
	const { allFile: { nodes } } = useStaticQuery( graphql`
		query {
			allFile( filter: { relativeDirectory: { eq: "pages/contact/headerImage" } }, limit: 1 ) {
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
		<LandingLayout >
			<HeroBanner
				title={ title }
				subheading={ excerptHTML }
				image={ headerImage }
				altText={ headerImageAlt }
			/>
			{ contentHTML && (
				<Container width="tight" centre pad>
					{ parse( contentHTML ) }
				</Container>
			) }
			<Container width="tight" pad centre>
				<ContactForm />
			</Container>
		</LandingLayout>
	)
}
Contact.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Contact