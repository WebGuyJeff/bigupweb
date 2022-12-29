export const scrollLock = ( shouldLock ) => {
	const dummyID = 'dummyScrollBar'
	const exists  = !! document.getElementById( dummyID )

	const scrollbarWidth = parseInt( (
		window.innerWidth - document.querySelector( 'html' ).getBoundingClientRect().width
	), 10 ) + 'px'

	const disableScroll = () => {
		if ( exists ) {
			document.getElementById( dummyID ).style.display = 'block'
		} else {
			const dummy = document.createElement( 'div' )
			dummy.setAttribute( 'id', dummyID )
			dummy.style = {
				position: 'fixed',
				right: '0',
				top: '0',
				width: scrollbarWidth,
				height: '100vh'
			}
			document.body.appendChild( dummy )
		}
		document.querySelector( 'body' ).style.overflow = 'hidden'
		document.querySelector( 'html' ).style.paddingRight = scrollbarWidth
	}

	const enableScroll = () => {
		exists && ( document.getElementById( dummyID ).style.display = 'none' )
		document.querySelector( 'body' ).style.overflow = 'visible'
		document.querySelector( 'html' ).style.paddingRight = '0'
	}

	shouldLock ? disableScroll() : enableScroll()
}
