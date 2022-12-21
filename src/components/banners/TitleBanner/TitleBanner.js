import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PropTypes from 'prop-types'
import Fullstop from 'components/Fullstop/Fullstop'
import {
	titleBanner,
	titleBanner_flex,
	titleBanner_content,
	titleBanner_date
} from './TitleBanner.module.scss'

const TitleBanner = ( { title, date, children } ) => {

	return (
		<div className={ titleBanner }>
			<div className={ titleBanner_flex }>
				<div className={ titleBanner_content }>
					<h1>
						{ title }
						<Fullstop />
					</h1>
					{ date && (
						<p className={ titleBanner_date }>Posted on { date }</p>
					) }
					{ children }
				</div>
			</div>
		</div>
	)
}

TitleBanner.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	children: PropTypes.node
}

export default TitleBanner
