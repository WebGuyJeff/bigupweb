import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import Section from '../components/Section/Section'
import { useStaticQuery, graphql } from 'gatsby'
import HeadMeta from '../components/HeadMeta'
import parse from 'html-react-parser'


console.log( '### DEBUG ###' )
console.log( JSON.stringify( siteData.site.siteMetadata ) )


export const Head = () => {
	return (
		<HeadMeta
			title={ siteTitle }
			description={ siteDesc }
		/>
	)
}

const siteData = useStaticQuery( graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
			}
		}
	}
` )
const { siteDesc, siteTitle } = siteData.site.siteMetadata

const Home = () => {
	return (
		<>
			<Layout pageTitle={ siteTitle }>
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

siteData.propTypes = {
	siteDesc: PropTypes.string.isRequired,
	siteTitle: PropTypes.string.isRequired
}

export default Home
