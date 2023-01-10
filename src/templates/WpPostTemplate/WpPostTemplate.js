import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fullstop from 'components/Fullstop/Fullstop'
import Section from 'components/containers/Section/Section'
import Button from 'components/buttons/Button/Button'
import LatestPosts from 'components/post/LatestPosts/LatestPosts'
import WPContent from 'components/containers/WPContent/WPContent'
import {
	wpPostTemplate,
	wpPostTemplate__date
} from './WpPostTemplate.module.scss'


const WpPostTemplate = ( { title, date, content, featuredImage, author, tags } ) => {
	const { name, lastName, avatar } = author.node

	return (
		<>
			<article className={ wpPostTemplate }>
				<header>
					<h1>
						{ title }
						<Fullstop />
					</h1>
					{ date && (
						<p className={ wpPostTemplate__date }>
							Posted on { date }
						</p>
					) }
					<img
						src={ avatar.url }
						alt={ `Author avatar for ${name}` }
						placeholder='blurred'
						width={ avatar.width }
						height={ avatar.height }
					/>
					<span>{ name }</span>
					{ lastName && <span>{ lastName }</span> }
					{ tags && 
						<div>
							{ tags.nodes.map( ( node, index ) => {
								return <Link key={ index } to={ node.uri }>{ node.name }</Link>
							} ) }	
						</div>
					}
				</header>
				{ content && (
					<Section>
						<WPContent content={ content }>
							<Link
								to="/blog"
							>
							</Link>
						</WPContent>
						<Button text="Back to Blog" />
					</Section>
				) }
			</article>
			<LatestPosts title="Further reading from the blog" />
		</>
	)
}

WpPostTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	content: PropTypes.string.isRequired,
	featuredImage: PropTypes.object.isRequired,
	author: PropTypes.shape( {
		node: PropTypes.shape( {
			name: PropTypes.string,
			lastName: PropTypes.string,
			avatar: PropTypes.string
		} )
	} ),
	tags: PropTypes.shape( {
		nodes: PropTypes.shape( {
			name: PropTypes.string,
			uri: PropTypes.string
		} )
	} )
}

export default WpPostTemplate
