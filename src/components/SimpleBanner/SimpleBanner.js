import * as React from "react"
import {   
    simpleBanner,
	container,
	bannerImage,
	gradient,
	bannerContent
} from './SimpleBanner.module.scss'
import PropTypes from "prop-types"

const SimpleBanner = ({ children, title, content }) => {
	return (
		<section className={simpleBanner}>
			{children}

			{title && (
				<div className={container}>
					<div className={bannerContent}>
						<h1>
							{title}
							<span style={{ color: "var(--primary)" }}>.</span>
						</h1>
						{content && (
							<div
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						)}
					</div>
				</div>
			)}
			<div className={gradient}></div>
		</section>
	)
}

SimpleBanner.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	content: PropTypes.string,
}

export default SimpleBanner
