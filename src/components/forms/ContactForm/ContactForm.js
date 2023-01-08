import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import {
	FaFileUpload,
	FaRegWindowClose
} from 'react-icons/fa'
import * as styles from './ContactForm.module.scss'

const ContactForm = ( { enableFileUpload } ) => {

	const wpRestEndpoint = 'https://wp-source.bigupweb.uk/wp-json/bigup/contact-form/v1/submit'

	const empty = {
		name: { value: '', errors: [] },
		email: { value: '', errors: [] },
		message: { value: '', errors: [] },
		files: { value: [], errors: [] },
		submitting: false,
		hasErrors: false
	}

	const hasErrors = ( stateObj ) => {
		let result = false
		Object.keys( stateObj ).forEach( ( input ) => {
			if ( stateObj[ input ].errors && stateObj[ input ].errors.length > 0 ) {
				result = true
			}
		} )
		return result
	}

	const validate = ( key, i ) => {
		let errors = []
		const val = i.value
		if ( val === '' || val === undefined || val.length == 0 ) return { value: val, errors }
		switch( key ) {

		case 'name':
			if ( val.length < 2 || val.length > 100 ) {
				errors.push( 'Name should be 2-100 characters.' )
			}
			break

		case 'email':
			if ( false === !! /^\S+@\S+\.\S+$/.test( val ) ) {
				errors.push( 'Email must match format "joe@email.uk".' )
			}
			break

		case 'message':
			if ( val.length < 10 || val.length > 3000 ) {
				errors.push( 'Message should be 10-3000 characters.' )
			}
			break

		case 'files':
			val.forEach( file => {
				if ( false === !! allowedFileUploadTypes.includes( file.type ) ) {
					errors.push( `File type "${file.name}" is not allowed.` )
				}
			} )
			break
		default:
			return Error( `No validation function matched the passed input "${i.name}"` )
		}
		return { value: val, errors }
	}

	const updateState = ( newValue ) => {
		const newState = {
			...state
		}
		for ( const key in newValue ) {
			if ( newValue[ key ].value ) {
				newState[ key ] = validate( key, newValue[ key ] )
			} else {
				newState[ key ] = newValue[ key ]
			}
		}
		const errorCheckedState = {
			...newState,
			hasErrors: hasErrors( newState )
		}
		localStorage.setItem( 'bigupFormState', JSON.stringify( errorCheckedState ) )
		return errorCheckedState
	}

	const [ state, setState ] = useState( () => {
		const storedJSON  = localStorage.getItem( 'bigupFormState' )
		const storedState = storedJSON !== 'undefined' ? JSON.parse( storedJSON ) : empty
		const initState   = storedState ? updateState( {
			...empty,
			...storedState,
			files: { value: [], errors: [] },
			submitting: false
		} ) : empty
		return initState
	} )

	const reset = () => {
		setState( empty )
		localStorage.removeItem( 'bigupFormState' )
	}

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

	const handleChange = ( event ) => {
		const input = event.target
		const value = input.name === 'files' ? Array.from( input.files ) : input.value
		setState( updateState( {
			[ input.name ]: {
				value: value,
				errors: []
			}
		} ) )
	}

	const handleSubmit = async ( event ) => {
		event.preventDefault()
		const form = event.currentTarget
		if ( '' !== form.querySelector( '#saveTheBees' ).value ) return

		const formData  = new FormData()
		for ( let key in state ) {
			if ( state[ key ].value ) {
				if ( key === 'files' ) {
					state.files.value.forEach( file => {
						formData.append( 'files[]', file, file.name )
					} )
				} else {
					formData.append( key, state[ key ].value )
				}
			}
		}

		const output = form.querySelector( 'footer > div' )
		let classes  = [ styles.popout ]
		const url    = wpRestEndpoint
		const fetch_options = {
			method: 'POST',
			headers: { 'Accept': 'application/json' },
			body: formData,
		}

		try {
			updateState( { submitting: true } )
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
				reset()
				localStorage.removeItem( 'bigupFormState' )
			}
			output.style.display = 'none'
			updateState( { submitting: false } )

		} catch ( error ) {
			console.error( error )
		}
	}

	const doFetchWithJSONResponse = async ( url, options ) => {
		try {
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
		return new Promise( ( resolve, reject ) => {
			try {
				while ( parent.firstChild ) {
					parent.removeChild( parent.firstChild )
				}
				resolve( 'Child nodes removed successfully.' )
			} catch ( error ) {
				reject( error )
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

	const displayMessagesAsPopouts = ( parent, messages, classes ) => {
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
			}
		} )
	}

	function animateWithCallback( property, value ) {
		return new Promise( ( resolve, reject ) => {
			try {
				this.style[ property ] = value
				// Replacement for built-in event listeners which don't initialise on new elements in time.
				let transition_complete = setInterval( () => {
					let style = getComputedStyle( this )
					if ( style[ property ] === value ) {
						clearInterval( transition_complete )
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
			<fieldset disabled={ state.submitting }>
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
						value={ state.name.value }
						onChange={ handleChange }
						required
					/>
					<span></span>
					<span></span>
					<div data-errors={ ( state.name.errors.length !== 0 ) }>
						{ state.name.errors.map( ( error, index ) => { return ( <span key={ index }>{ error }</span> ) } ) }
					</div>
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
						value={ state.email.value }
						onChange={ handleChange }
						required
					/>
					<span></span>
					<span></span>
					<div data-errors={ ( state.email.errors.length !== 0 ) }>
						{ state.email.errors.map( ( error, index ) => { return ( <span key={ index }>{ error }</span> ) } ) }
					</div>
				</div>
				<div className={ `${styles.inputWrap} ${styles.inputWrap__wide}` }>
					<textarea
						className={ styles.input }
						name="message"
						maxLength="3000"
						title="Message"
						rows="8"
						aria-label="Message"
						placeholder="Type your message here..."
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Type your message...' }
						value={ state.message.value }
						onChange={ handleChange }
					>
					</textarea>
					<span></span>
					<span></span>
					<div data-errors={ ( state.message.errors.length !== 0 ) }>
						{ state.message.errors.map( ( error, index ) => { return ( <span key={ index }>{ error }</span> ) } ) }
					</div>
				</div>
				{ enableFileUpload && (
					<div className={ styles.customFileUpload }>
						<label>
							<input
								title="Attach a File"
								type="file"
								name="files"
								multiple
								onChange={ handleChange }
							/>
							<span>
								<FaFileUpload />
							</span>	
							Attach file
						</label>
						{
							state.files.value.length > 0 &&
							<div>
								<ul>
									{ state.files.value.map( ( file, index ) => { return (
										<li key={ index }>
											<span>
												{ file.name }
											</span>
											<FaRegWindowClose
												onClick={ () => {
													setState( updateState( { 
														files: { 
															value: state.files.value.filter( ( e ) => { return e !== file } ),
															errors: [] // Need to recheck validation for errors after removal of the file
														}
													} ) )
												} }
											/>
										</li>
									) } ) }
								</ul>
							</div>
						}
						<div data-errors={ ( state.files.errors.length !== 0 ) }>
							{ state.files.errors.map( ( error, index ) => { return ( <span key={ index }>{ error }</span> ) } ) }
							<p>Allowed file types: jpg, png, webp, svg, pdf, txt, odf, xlsx, doc.</p>
						</div>
					</div>
				) }
				<Button
					type='submit'
					text={ state.submitting ? '[BUSY]' : state.hasErrors ? '[FIX ERRORS]' : 'Submit' }
					disabled={ [ state.submitting, state.hasErrors ].includes( true ) }
				/>
				<Button
					type='button'
					text='Reset'
					style='outline'
					disabled={ state.submitting }
					onClick={ reset }
				/>
			</fieldset>
			<footer>
				<div style={ { display: 'none', opacity: 0 } }></div>
				<template>
				</template>
			</footer>
		</form>
	)
}

ContactForm.propTypes = {
	enableFileUpload: PropTypes.bool
}

export default ContactForm
