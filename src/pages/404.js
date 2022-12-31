import React from 'react'
import HeadMeta from 'components/HeadMeta'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import Container from 'components/containers/Container/Container'

const NotFound = () => {
	return (
		<DefaultLayout pageTitle="Page Not Found">
			<Container width="tight" centre pad>
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
			</Container>
		</DefaultLayout>
	)
}

export const Head = () => {
	return (
		<HeadMeta
			pageTitle="Page Not Found"
			pageDescription="Oops! We couldn't find the page you were looking for."
		/>
	)
}

export default NotFound