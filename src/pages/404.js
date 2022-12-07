import React from 'react'
import PropTypes from 'prop-types'
import HeadMeta from '../components/HeadMeta'
import Layout from '../components/Layout/Layout'

export const Head = ( { pageContext } ) => {
	const { title, excerpt } = pageContext

	return (
		<HeadMeta
			title={ title }
			description={ excerpt }
		/>
	)
}

Head.propTypes = {
	pageContext: PropTypes.object.isRequired,
}

const NotFound = () => {
	return (
		<Layout pageTitle="Page Not Found">
			<title>Page Not Found</title>
			<br />
			<br />
			<h1>Clang! Page Not Found 🤕</h1>
			<p>
				Unfortunately the page you are trying to visit does not exist.
			</p>
			<br />
			<p>
				Please try the menu above or contact us so we can help. If you
				believe this page should exist, please{ ' ' }
				<a href="mailto:info@bigupweb.uk">send us an email</a>.
			</p>
			<p>Apologies for any inconvenience.</p>
		</Layout>
	)
}

export default NotFound
