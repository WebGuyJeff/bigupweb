import React from 'react'
import { Link } from 'gatsby'
import useWpAllTags from 'hooks/useWpAllTags'
import Fullstop from 'src/components/Fullstop/Fullstop'
import {
	tagCloud
} from './TagCloud.module.scss'

const TagCloud = () => {
	const tags = useWpAllTags()
	return (
		<section className={ tagCloud }>
			<h5>
				Tags
				<Fullstop />
			</h5>
			<div>
				{ tags.map( ( node, index ) => {
					return (
						<Link to={ node.uri } key={ index }>
							<span>{ node.name }</span>
							<span> ({ node.posts.nodes.length })</span>
						</Link>
					)
				} ) }
			</div>
		</section>
	)
}

export default TagCloud
