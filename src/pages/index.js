import React from 'react'
import parse from 'html-react-parser'
import LandingLayout from 'components/Layout/LandingLayout/LandingLayout'
import HeroBanner from 'components/banners/HeroBanner/HeroBanner'
import Container from 'components/containers/Container/Container'
import PageIntro from 'components/PageIntro/PageIntro'
import Section from 'components/containers/Section/Section'
import Intro from 'components/Intro/Intro'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import HeadMeta from 'components/HeadMeta'
import JSONData from 'root/content/language/english.json'

const Home = () => {
	const { excerptHTML, contentHTML } = JSONData.pages.home
	const { title } = useSiteMetadata()
	return (
		<LandingLayout >
			<HeroBanner
				title={ title }
				subheading={ excerptHTML }
			/>
			{ contentHTML && (
				<Container width="tight" centre pad>
					<PageIntro
						eyebrow="Downright Different"
					>
						{ parse( contentHTML ) }	
					</ PageIntro>
				</Container>
			) }
			<Section>
				<Intro />
			</Section>
		</LandingLayout>
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