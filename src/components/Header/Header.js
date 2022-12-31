import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import LogoSVG from 'components/LogoSVG/LogoSVG'
import Burger from 'src/components/navigation/Burger/Burger'
import {
	header,
	headerAbsolute,
	headerFixed
} from './Header.module.scss'

const Header = ( { absolute, sticky } ) => {

	const absoluteClass = absolute ? headerAbsolute : ''
	const classes       = `${header} ${absoluteClass}`

	if ( sticky ) {
		useEffect( () => {
			window.addEventListener( 'scroll', isSticky )
			return () => {
				window.removeEventListener( 'scroll', isSticky )
			}
		} )
		const isSticky = () => {
			const element = document.querySelector( '.' + header )
			const scrollTop = window.scrollY
			scrollTop >= 1 ? element.classList.add( headerFixed ) : element.classList.remove( headerFixed )
		}
	}

	return (
		<header className={ classes }>
			<LogoSVG />
			<Burger />
		</header>
	)
}

Header.propTypes = {
	position: PropTypes.string,
	absolute: PropTypes.bool,
	sticky: PropTypes.bool
}

export default Header
