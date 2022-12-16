import * as React from 'react'
import Logo from '../../components/Logo/Logo'
import Nav from '../../components/Nav/Nav'
import {
	header
} from './Header.module.scss'

const Header = () => {

	return (
		<header className={ header }>
			<Logo />
			<Nav />
		</header>
	)
}

export default Header
