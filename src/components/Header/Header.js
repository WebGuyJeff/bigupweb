import * as React from 'react'
import PropTypes from 'prop-types'
import Logo from 'components/Logo/Logo'
import Nav from 'components/Nav/Nav'
import {
	header,
	headerAbsolute
} from './Header.module.scss'

const Header = ( position ) => {
	const classes = ( 'absolute' === position ) ? headerAbsolute : header
	return (
		<header className={ classes }>
			<Logo />
			<Nav />
		</header>
	)
}

Header.propTypes = {
	position: PropTypes.string
}

export default Header
