import * as React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { logo } from './Logo.module.scss'

const Logo = () => {
	const { wp: { siteLogo } } = useStaticQuery( graphql`
		query {
			wp {
				siteLogo {
					altText
					sourceUrl
					gatsbyImage(
						formats: [AUTO, PNG]
						height: 80
						width: 270
					)
				}
			}
		}
	` )
	const {	altText } = siteLogo
	const { title }   = useSiteMetadata()
	const image       = getImage( siteLogo )
	
	return (
		<Link to="/" className={ logo }>
			<GatsbyImage
				alt={ altText }
				image={ image }
				loading="eager"
				transformOptions={ { fit: 'cover' } }
			/>
			<span className="visuallyhidden">
				{ title }
			</span>
		</Link>
	)
}

export default Logo
