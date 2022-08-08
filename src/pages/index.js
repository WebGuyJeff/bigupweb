import React from 'react'
import Layout from '../components/Layout/Layout'
import Section from '../components/Section/Section'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/SEO'
import parse from 'html-react-parser'
import WebFont from 'webfontloader'

WebFont.load( {
	google: {
		families: [ 'Roboto:600,400:latin', 'Roboto Condensed:900,600:latin' ],
	},
} )

const Home = () => {
	const data = useStaticQuery( graphql`
		query QuerySiteMeta {
			wp {
				generalSettings {
					title
					description
				}
			}
		}
	` )

	const seoTitle =
		data.wp.generalSettings.description +
		' | ' +
		data.wp.generalSettings.title

	return (
		<>
			<Seo title={ seoTitle } />
			<Layout pageTitle={ data.wp.generalSettings.description }>
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

export default Home
