import React from 'react'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaInstagram,
	FaLinkedin,
} from 'react-icons/fa'
import {
	socialLinks
} from './SocialLinks.module.scss'


const SocialLinks = () => {
	const {
		twitterUsername,
		facebookUsername,
		instagramUsername,
		linkedinUsername
	} = useSiteMetadata()

	return (
		<ul className={ socialLinks }>
			{ twitterUsername && (
				<li>
					<a
						href={ `https://www.twitter.com/${twitterUsername}` }
						target="_blank"
						rel="nofollow noreferrer noopener"
					>
						<FaTwitterSquare />
					</a>
				</li>
			) }
			{ facebookUsername && (
				<li>
					<a
						href={ `https://www.facebook.com/${facebookUsername}` }
						target="_blank"
						rel="nofollow noreferrer noopener"
					>
						<FaFacebookSquare />
					</a>
				</li>
			) }
			{ instagramUsername && (
				<li>
					<a
						href={ `https://www.instagram.com/${instagramUsername}` }
						target="_blank"
						rel="nofollow noreferrer noopener"
					>
						<FaInstagram />
					</a>
				</li>
			) }
			{ linkedinUsername && (
				<li>
					<a
						href={ `https://www.linkedin.com/company/${linkedinUsername}` }
						target="_blank"
						rel="nofollow noreferrer noopener"
					>
						<FaLinkedin />
					</a>
				</li>
			) }
		</ul>
	)
}

export default SocialLinks
