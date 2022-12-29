import React, { useState, useEffect } from 'react'
import { scrollLock } from 'src/utils/domUtils'
import MenuSlider from 'src/components/navigation/MenuSlider/MenuSlider'
import {
	burger
} from './Burger.module.scss'

const Burger = () => {
	const [ open, setOpen ] = useState( false )

	useEffect( () => {
		window.addEventListener( 'resize', isMobile )
		return () => {
			window.removeEventListener( 'resize', isMobile )
		}
	} )
	const isMobile = () => {
		// Pixel size should match breakpoint in CSS.
		window.innerWidth >= 768 && setOpen( false )
	}

	open ? scrollLock( true ) : scrollLock( false )

	return (
		<>
			<div
				open={ open }
				onClick={ () => setOpen( !open ) }
				className={ burger }
				aria-controls="menuSlider"
				aria-label="Menu"
				aria-expanded={ open }
			>
				<div />
				<div />
				<div />
			</div>
			<MenuSlider open={ open }/>
		</>
	)
}

export default Burger
