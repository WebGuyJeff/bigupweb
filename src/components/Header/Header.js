import * as React from 'react'
import PropTypes from 'prop-types'
import LogoSVG from 'components/LogoSVG/LogoSVG'
import Nav from 'components/Nav/Nav'
import {
	header,
	headerAbsolute
} from './Header.module.scss'

const Header = ( { position } ) => {
	const classes = ( 'absolute' === position ) ? headerAbsolute : header
	return (
		<header className={ classes }>
			<LogoSVG />
			<Nav />
		</header>
	)
}

Header.propTypes = {
	position: PropTypes.string
}

export default Header
