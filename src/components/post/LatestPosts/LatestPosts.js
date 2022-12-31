import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import useWpLatestPosts from 'hooks/useWpLatestPosts'
import Section from 'components/containers/Section/Section'
import Container from 'components/containers/Container/Container'
import PostFeed from 'components/Feeds/PostFeed/PostFeed'
import Button from 'components/Button/Button'
import {
	learnMore,
	introArea
} from './LatestPosts.module.scss'

const LatestPosts = ( { title, introduction } ) => {
	return (
		<Section>
			<Container>
				{ title || introduction ? (
					<div className={ introArea } >
						{ title && (
							<h2>
								{ title }
								<span>.</span>
							</h2>
						) }
						{ introduction && <p>{ introduction }</p> }
					</div>
				) : null }
				<PostFeed posts={ useWpLatestPosts() }/>
				<div className={ learnMore } >
					<Link
						to="/blog"
					>
						<Button text="All Blog Posts" />
					</Link>
				</div>
			</Container>
		</Section>
	)
}

LatestPosts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string
}

export default LatestPosts
