import * as React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import { logo } from './LogoRaster.module.scss'

const LogoRaster = () => {
	const { wp: { siteLogo } } = useStaticQuery( graphql`
		query {
			wp {
				siteLogo {
					altText
					sourceUrl
					localFile {
						childImageSharp {
							gatsbyImageData(
								formats: PNG
								layout: CONSTRAINED
								transformOptions: {fit: CONTAIN}
								height: 80
							)
						}
					}
				}
			}
		}
	` )
	const {	altText } = siteLogo
	const { title }   = useSiteMetadata()
	const image       = getImage( siteLogo.localFile )

	return (
		<Link to="/">
			<GatsbyImage
				className={ logo }
				image={ image }
				alt={ altText }
				title={ title }
				objectFit="contain"
				objectPosition="left"
			/>
			<span className="visuallyhidden">
				{ title }
			</span>
		</Link>
	)
}

export default LogoRaster
