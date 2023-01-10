import React from 'react'
import PropTypes from 'prop-types'
import {
	pageIntro,
	pageIntro__content,
	pageIntro__eyebrow
} from './PageIntro.module.scss'

const PageIntro = ( { children, eyebrow } ) => {

	return (
		<section className={ pageIntro }>
			<span className={ pageIntro__eyebrow }>
				{ eyebrow }
			</span>
			<span className={ pageIntro__content }>
				{ children }
			</span>
		</section>
	)
}

PageIntro.propTypes = {
	children: PropTypes.node,
	eyebrow: PropTypes.string
}

export default PageIntro
