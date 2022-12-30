import React from 'react'
import DefaultLayout from 'components/Layout/DefaultLayout/DefaultLayout'
import Section from 'components/containers/Section/Section'
import MaxWidth from 'components/containers/MaxWidth/MaxWidth'
import Intro from 'components/Intro/Intro'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import HeadMeta from 'components/HeadMeta'

const Home = () => {
	const {
		title
	} = useSiteMetadata()
	return (
		<>
			<DefaultLayout pageTitle={ title }>
				<Section>
					<MaxWidth width="tight" >
						<Intro />
					</MaxWidth>
				</Section>
			</DefaultLayout>
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