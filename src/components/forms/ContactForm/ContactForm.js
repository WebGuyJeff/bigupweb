import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import {
	form
} from './ContactForm.module.scss'

const ContactForm = ( { files } ) => {




	return (
		<form className={ form } method="post" acceptCharset="utf-8" autoComplete="on">
			<header className="form_section">
				<h3 id="aria_form-title" className="form_title">
					Form Title
				</h3>
				<p id="aria_form-desc" className="form_message">
					Complete and submit the form.
				</p>
			</header>
			<fieldset className="form_section">
				<input
					style={ { display: 'none' } }
					id="saveTheBees"
					name="required_field"
					type="text"
					autoComplete="off"
				/>
				<div className="form_inputWrap form_inputWrap-short">
					<input
						className="form_input"
						name="name"
						type="text"
						maxLength="100"
						title="Name"
						required aria-label="Name"
						placeholder="Name (required)"
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Name (required)' }
					/>
					<span className="form_flag form_flag-hover"></span>
					<span className="form_flag form_flag-focus"></span>
				</div>
				<div className="form_inputWrap form_inputWrap-short">
					<input
						className="form_input"
						name="email" type="text"
						maxLength="100" title="Email"
						required aria-label="Email"
						placeholder="Email (required)"
						onFocus={ ( e ) => e.target.placeholder='' }
						onBlur={ ( e ) => e.target.placeholder='Email (required)' }
					/>
					<span className="form_flag form_flag-hover"></span>
					<span className="form_flag form_flag-focus"></span>
				</div>
				<div className="form_inputWrap form_inputWrap-wide">
					<textarea
						className="form_input"
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
					<span className="form_flag form_flag-hover"></span>
					<span className="form_flag form_flag-focus"></span>
				</div>

				{ files && (
					<div className="customFileUpload">
						<label>
							<input
								title="Attach a File"
								type="file"
								name="files"
								multiple
								onChange="form_sender.updateFileList( this )"
							/>
							<span className="customFileUpload_icon">
								<svg xmlns="http://www.w3.org/2000/svg" height="1em"  viewBox="0 0 512 512">
									<path fill="currentColor" preserveAspectRatio="xMidYMid meet" d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
								</svg>
							</span>	
							Attach file
						</label>
						<div className="customFileUpload_fileList"></div>
					</div>
				) }
				<Button
					type={ 'submit' }
					text='submit'
					style='primary'
				>
					Submit
				</Button>
			</fieldset>
			<footer className="form_section">
				<div className="form_output" style={ { display: 'none', opacity: 0 } }></div>
			</footer>
		</form>
	)
}

ContactForm.propTypes = {
	files: PropTypes.bool
}

export default ContactForm
