import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import { logoSVG } from './LogoSVG.module.scss'

const Logo = () => {
	const { wp: { siteLogo } } = useStaticQuery( graphql`
		query {
			wp {
				siteLogo {
					altText
					localFile {
						publicURL
					}
				}
			}
		}
	` )
	const { title, description } = useSiteMetadata()
	const altText                = ( false === !! siteLogo.altText ) ? description : siteLogo.altText
	const url                    = siteLogo.localFile.publicURL

	return (
		<Link
			to="/"
			className={ logoSVG }
			id="headerLogo"
		>
			<img
				src={ url }
				title={ title }
				alt={ altText }
				height={ '80px' }
			/> 
			<span className="visuallyhidden">
				{ title }
			</span>
		</Link>
	)
}

export default Logo
