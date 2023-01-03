import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import {
	FaFileUpload
} from 'react-icons/fa'
import * as styles from './ContactForm.module.scss'

const ContactForm = ( { enableFileUpload } ) => {

	let debug = true
	let startTime // set when form is submitted.
	const timeElapsed = () => {
		let elapsed = Date.now() - startTime
		return elapsed.toString().padStart( 5, '0' )
	}

	const wpRestEndpoint = 'https://wp-source.bigupweb.uk/wp-json/bigup/contact-form/v1/submit'

	const buttonID = `${styles.form}-submit`

	const allowedFileUploadTypes = [
		'image/jpeg',
		'image/png',
		'image/gif',
		'image/webp',
		'image/svg+xml',
		'application/pdf',
		'application/vnd.oasis.opendocument.text',
		'application/vnd.oasis.opendocument.spreadsheet',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/msword',
	]

	let form_busy = false

	const handleSubmit = async ( event ) => {
		event.preventDefault()
		startTime = Date.now()
		if( debug ) console.log( 'Time | Start/Finish | Function | Target' )
		if( debug ) console.log( timeElapsed() + ' |START| handleSubmit' )

		const form = event.currentTarget
		const output = form.querySelector( 'footer > div' )
		let classes = [ styles.popout ]

		// redirect bots if honeypot is filled.
		if ( '' != form.querySelector( '[name="required_field"]' ).value ) {
			document.documentElement.remove()
			window.location.replace( 'https://en.wikipedia.org/wiki/Robot' )
		}

		const formData    = new FormData()
		const textInputs  = form.querySelectorAll( '.' + styles.input )
		const fileInput   = form.querySelector( '.customFileUpload_input' )

		textInputs.forEach( input => {
			formData.append( input.name, input.value )
		} )

		if ( fileInput ) {
			const files = fileInput.files

			for( let i = 0; i < files.length; i++ ){
				let file = files[ i ]

				if ( allowedFileUploadTypes.includes( file.type ) ) {
					formData.append( 'files[]', file, file.name )

				} else {
					classes = [ ...classes, styles.popout__danger ]
					output.style.display = 'flex'
					await animateMultipleWithCallback( output, 'opacity', '0' )
					await removeChildElements( output )
					await displayMessagesAsPopouts( output, [ 'The selected file type is not allowed' ], classes )
					await animateMultipleWithCallback( output, 'opacity', '1' )
					await pauseWithCallback( 5000 )
					await animateMultipleWithCallback( output, 'opacity', '0' )
					await removeChildElements( output )
					output.style.display = 'none'
					return
				}
			}
		}

		const url = wpRestEndpoint
		const fetch_options = {
			method: 'POST',
			headers: { 'Accept': 'application/json' },
			body: formData,
		}

		try {
			form_busy = true
			lockFormInputs( form )
			output.style.display = 'flex'

			await displayMessagesAsPopouts( output, [ 'Connecting...' ], classes )

			let [ result, ] = await Promise.all( [
				doFetchWithJSONResponse( url, fetch_options ),
				animateMultipleWithCallback( output, 'opacity', '1' )
			] )
			result.class = ( result.ok ) ? styles.popout__success : styles.popout__danger
			classes = [ ...classes, result.class ]

			// Animate the popout messages.
			await animateMultipleWithCallback( output, 'opacity', '0' )
			await removeChildElements( output )
			await displayMessagesAsPopouts( output, result.output, classes )
			await animateMultipleWithCallback( output, 'opacity', '1' )
			await pauseWithCallback( 5000 )
			await animateMultipleWithCallback( output, 'opacity', '0' )
			await removeChildElements( output )

			// Clean up the form.
			if ( result.ok ) {
				let fieldset = form.querySelectorAll( '.' + styles.input )
				fieldset.forEach( input => { input.value = '' } )
				removeChildElements( form.querySelector( `.${styles.customFileUpload} > div` ) )
			}
			output.style.display = 'none'
			form_busy = false

		} catch ( error ) {
			console.error( error )
		} finally {
			if( debug ) console.log( timeElapsed() + ' | END | handleSubmit' )
		}
	}


	const doFetchWithJSONResponse = async ( url, options ) => {
		try {
			if( debug ) console.log( `${timeElapsed()} |START| Fetch request` )
			const controller = new AbortController()
			const abort      = setTimeout( () => controller.abort(), 14000 )
			const response   = await fetch( url, { ...options, signal: controller.signal } )
			clearTimeout( abort )
			const result = await response.json()
			result.ok    = response.ok
			if ( typeof result.output === 'string' ) result.output = [ result.output ]
			if ( ! result.ok ) throw result
			return result

		} catch ( error ) {
			if ( ! error.output ) {
				// error is not a server response, so display a generic error.
				error.output = [ 'Failed to establish a connection to the server.' ]
				error.ok = false
			}
			for ( const message in error.output ) {
				console.error( makeStringHumanReadable( error.output[ message ] ) )
			}
			return error

		} finally {
			if( debug ) console.log( `${timeElapsed()} | END | Fetch request` )
		}
	}


	const makeStringHumanReadable = ( string ) => {
		const HTMLtags = /(?<!\([^)]*?)<[^>]*?>/g
		const humanReadableChars = /(\([^\)]*?\))|[ \p{L}\p{N}\p{M}\p{P}]/ug
		const extraSpaces = /^\s*|\s(?=\s)|\s*$/g
		let noTags = string.replace( HTMLtags, '' )
		let humanReadable = noTags.match( humanReadableChars ).join( '' )
		let cleanString = humanReadable.replace( extraSpaces, '' )
		return cleanString
	}


	const removeChildElements = ( parent ) => {
		if( debug ) console.log( `${timeElapsed()} |START| removeChildElements | ${parent.classList}` )
		return new Promise( ( resolve, reject ) => {
			try {
				while ( parent.firstChild ) {
					parent.removeChild( parent.firstChild )
				}
				resolve( 'Child nodes removed successfully.' )
			} catch ( error ) {
				reject( error )
			} finally {
				if( debug ) console.log( `${timeElapsed()} | END | removeChildElements | ${parent.classList}` )
			}
		} )
	}


	const pauseWithCallback = ( milliseconds ) => { 
		return new Promise( ( resolve ) => { 
			setTimeout( () => {
				resolve()
			}, milliseconds )
		} )
	}


	const lockFormInputs = ( form ) => {

		if( debug ) console.log( `${timeElapsed()} |START| lockFormInputs | Locked` )

		const button = form.querySelector( '#' + buttonID )
		const inputs = form.querySelectorAll( '.' + styles.input )

		inputs.forEach( input => { input.disabled = true } )
		let idle_text = button.innerText
		button.innerText = '[Busy]'

		let unlockFormInputs = setInterval( () => {
			if ( ! form_busy ) {
				clearInterval( unlockFormInputs )
				inputs.forEach( input => { input.disabled = false } )
				button.innerText = idle_text
				if( debug ) console.log( `${timeElapsed()} | END | lockFormInputs | Unlocked` )
			}
		}, 250 )
	}


	const displayMessagesAsPopouts = ( parent, messages, classes ) => {
		if( debug ) console.log( `${timeElapsed()} |START| displayMessagesAsPopouts | ${messages[ 0 ]}` )
		return new Promise( ( resolve, reject ) => {
			try {
				if ( ! parent || parent.nodeType !== Node.ELEMENT_NODE ) {
					throw new TypeError( 'parent must be an element node.' )
				} else if ( ! is_iterable( messages ) ) {
					throw new TypeError( `message_array must be non-string iterable. ${typeof messages} found.` )
				}
				let popouts = []
				messages.forEach( ( message ) => {
					let p = document.createElement( 'p' )
					p.innerText = makeStringHumanReadable( message )
					classes.forEach( ( className ) => {
						p.classList.add( className )
					} )
					parent.appendChild( p )
					popouts.push( p )
				} )
				resolve( popouts )
			} catch ( error ) {
				reject( error )
			} finally {
				if( debug ) console.log( `${timeElapsed()} | END | displayMessagesAsPopouts | ${messages[ 0 ]}` )
			}
		} )
	}


	function animateWithCallback( property, value ) {
		return new Promise( ( resolve, reject ) => {
			try {
				if( debug ) console.log( `${timeElapsed()} |START| animateWithCallback | ${this.classList} : ${property} : ${value}` )
				this.style[ property ] = value
				// Replacement for built-in event listeners which don't initialise on new elements in time.
				let transition_complete = setInterval( () => {
					let style = getComputedStyle( this )
					if ( style[ property ] === value ) {
						clearInterval( transition_complete )
						if( debug ) console.log( `${timeElapsed()} | END | animateWithCallback | ${this.classList} : ${property} : ${value}` )
						resolve( 'Transition complete.' )
					}
				}, 10 )
			} catch ( error ) {
				reject( error )
			}
		} )
	}


	const animateMultipleWithCallback = async ( elements, property, value ) => {
		if ( ! is_iterable( elements ) ) elements = [ elements ]
		if ( is_iterable( elements ) && elements.every( ( element ) => { return element.nodeType === 1 } ) ) {
			const promises = elements.map( ( node ) => animateWithCallback.bind( node )( property, value ) )
			let result = await Promise.all( promises )
			return result

		} else {
			throw new TypeError( 'elements must be a non-string iterable. ' + typeof elements + ' found.' )
		}
	}


	const is_iterable = ( object ) => {
		if ( object === null || object === undefined ) return false
		return typeof object[ Symbol.iterator ] === 'function'
	}


	const updateFileList = ( input ) => {
		const output = input.parentElement.nextElementSibling
		const list   = document.createElement( 'ul' )
		removeChildElements( output )
		output.appendChild( list )
		for ( let i = 0; i < input.files.length; ++i ) {
			list.innerHTML += '<li>' + input.files.item( i ).name + '</li>'
		}
	}


	return (
		<form
			className={ styles.form }
			onSubmit={ handleSubmit.bind( this ) }
			method="post"
			acceptCharset="utf-8"
			autoComplete="on"
		>
			<header>
				<h3>
					Form Title
				</h3>
				<p>
					Complete and submit the form.
				</p>
			</header>
			<fieldset>
				<input
					style={ { display: 'none' } }
					id="saveTheBees"
					name="required_field"
					type="text"
					autoComplete="off"
				/>
				<div className={ `${styles.inputWrap} ${styles.inputWrap__narrow}` }>
					<input
						className={ styles.input }
						name="name"
						type="text"
						maxLength="100"
						title="Name"
						aria-label="Name"
						placeholder="Name (required)"
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Name (required)' }
						required
					/>
					<span></span>
					<span></span>
				</div>
				<div className={ `${styles.inputWrap} ${styles.inputWrap__narrow}` }>
					<input
						className={ styles.input }
						name="email"
						type="text"
						maxLength="100"
						title="Email"
						aria-label="Email"
						placeholder="Email (required)"
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Email (required)' }
						required
					/>
					<span></span>
					<span></span>
				</div>
				<div className={ `${styles.inputWrap} ${styles.inputWrap__wide}` }>
					<textarea
						className={ styles.input }
						name="message"
						maxLength="5000"
						title="Message"
						rows="8"
						aria-label="Message"
						placeholder="Type your message here..."
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Type your message...' }
					>
					</textarea>
					<span></span>
					<span></span>
				</div>
				{ enableFileUpload && (
					<div className={ styles.customFileUpload }>
						<label>
							<input
								title="Attach a File"
								type="file"
								name="files"
								multiple
								onChange={ ( e ) => updateFileList( e.target ) }
							/>
							<span>
								<FaFileUpload />
							</span>	
							Attach file
						</label>
						<div></div>
					</div>
				) }
				<Button
					id={ buttonID }
					type={ 'submit' }
					text='submit'
				>
					Submit
				</Button>
			</fieldset>
			<footer>
				<div style={ { display: 'none', opacity: 0 } }></div>
			</footer>
		</form>
	)
}

ContactForm.propTypes = {
	enableFileUpload: PropTypes.bool
}

export default ContactForm
