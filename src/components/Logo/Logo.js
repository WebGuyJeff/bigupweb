import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { logo } from './Logo.module.scss'

const Logo = () => {
	const { title }        = useSiteMetadata()
	const logoRelativePath = '../../../static/logo/bigup-web-logo-wide.png'

	return (
		<Link to="/" className={ logo }>
			<StaticImage
				alt="Bigup Web Logo"
				src={ logoRelativePath }
				loading="eager"
				transformOptions={ { fit: 'inside' } }
				height="80"
			/>
			<span className="visuallyhidden">
				{ title }
			</span>
		</Link>
	)
}

export default Logo
