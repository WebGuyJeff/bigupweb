import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'src/components/navigation/Navbar/Navbar'
import SocialLinks from 'components/navigation/SocialLinks/SocialLinks'
import {
	menuSlider
} from './MenuSlider.module.scss'

const MenuSlider = ( { open } ) => {

	return (
		<div
			open={ open }
			className={ menuSlider }
			id="menuSlider"
			aria-hidden={ !open }
		>
			<Navbar />
			<SocialLinks />
		</div>
	)
}

MenuSlider.propTypes = {
	open: PropTypes.bool
}

export default MenuSlider
