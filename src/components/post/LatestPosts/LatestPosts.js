import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import useWpLatestPosts from 'hooks/useWpLatestPosts'
import Section from 'components/containers/Section/Section'
import RowWrap from 'components/containers/RowWrap/RowWrap'
import PostItem from 'components/post/PostItem/PostItem'
import Button from 'components/Button/Button'

const LatestPosts = ( { title, introduction } ) => {
	const wpLatestPosts = useWpLatestPosts()
	return (
		<Section>
			<div className="container container_tight">
				{ title || introduction ? (
					<div className="intro_area">
						{ title && (
							<h2>
								{ title }
								<span>.</span>
							</h2>
						) }
						{ introduction && <p>{ introduction }</p> }
					</div>
				) : null }
				<RowWrap>
					{ wpLatestPosts.map( ( node, index ) => {
						return <PostItem key={ index } node={ node } />
					} ) }
				</RowWrap>
				<div className="learn_more">
					<Button text="All Blog Posts" as={ Link } to="/blog" />
				</div>
			</div>
		</Section>
	)
}

LatestPosts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string
}

export default LatestPosts
