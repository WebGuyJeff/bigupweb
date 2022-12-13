import React from 'react'
import Layout from '../components/Layout/Layout'
import Section from '../components/Section/Section'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import HeadMeta from '../components/HeadMeta'
import parse from 'html-react-parser'


const Home = () => {
	const {
		title
	} = useSiteMetadata()
	return (
		<>
			<Layout pageTitle={ title }>
				<Section>
					{ parse( `
						<p>
							Welcome to Bigup Web where we specialise in making memorable web sites and web
							apps that just work.
						</p>
						<p>
							👋 Hi! If you're a client of Jeff's don't worry. Jeff is the driving force behind
							Bigup Web and you can find his website in the <a href="https://jeffersonreal.uk">usual place</a>.
						</p>
						<p>
							👷 Bigup Web has a brand new home in the works, but we are business as usual!
							Please <a href="mailto:jeff@bigupweb.uk">send us an email</a> so we can get your web
							idea off the ground.
						</p>
						<p>
							🔗 Bookmark this page to see our new home come to life over the coming weeks.
						</p>
					` ) }
				</Section>
			</Layout>
		</>
	)
}

export const Head = () => {
	const {
		title,
		description
	} = useSiteMetadata()
	return (
		<HeadMeta
			pageTitle={ title }
			pageDescription={ description }
		/>
	)
}

export default Home