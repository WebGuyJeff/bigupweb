import React from 'react'
import { Link } from 'gatsby'
import useWpFooterMenu from 'hooks/useWpFooterMenu'
import MaxWidth from 'components/containers/MaxWidth/MaxWidth'
import SocialLinks from 'components/navigation/SocialLinks/SocialLinks'
import Fullstop from 'components/Fullstop/Fullstop'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import {
	footer,
	footer_inner,
	footer_menu,
	copyright,
} from './Footer.module.scss'

const Footer = () => {
	const {
		developerUrl,
		developerName
	} = useSiteMetadata()
	const footerLinks  = useWpFooterMenu()

	return (
		<footer style={ { marginBottom: 0 } } className={ footer }>
			<MaxWidth width="tight">
				<div className={ footer_inner }>
					<div className={ footer_menu }>
						<h5>
							Links
							<Fullstop />
						</h5>
						<ul>
							{ footerLinks.map( ( node, index ) => {
								return (
									<li key={ index }>
										<Link
											to={ node.uri }
											activeClassName="menu_item--active"
										>
											{ node.label }
											<Fullstop />
										</Link>
									</li>
								)
							} ) }
						</ul>
					</div>
					<div className={ footer_menu }>
						<h5>
						Follow Bigup Web
							<Fullstop />
						</h5>
						<SocialLinks />
					</div>
				</div>
				<div className={ copyright }>
					<p>
						Designed & developed by{ ' ' }
						<a
							href={ developerUrl }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ developerName }
						</a>
						<span>.</span>
					</p>
				</div>
			</ MaxWidth>
		</footer>
	)
}

export default Footer
