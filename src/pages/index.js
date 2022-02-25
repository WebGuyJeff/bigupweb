import React from "react"
import Layout from '../components/layout'
import {
    useStaticQuery,
    graphql
} from 'gatsby'

const Home = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `)

    return (
        <Layout 
            pageTitle={data.site.siteMetadata.description}
        >
            <title>{data.site.siteMetadata.description} | {data.site.siteMetadata.title}</title>
            <br />
            <br />
            <h1>Welcome to Bigup Web!</h1>
            <p>
                Here we specialise in making memorable web sites and web apps that just work.
            </p>
            <br />
            <p>
                👷 We have a brand new home in the works, but that doesn't mean we aren't still cooking
                up the web!
            </p>
            <p>
                ✉️ <a href="mailto:jeff@bigupweb.uk">Send us an email</a> so we can get your web idea
                off the ground. 
            </p>
            <p>
                🔗 Bookmark this page to see our new home come to life over the coming weeks.
            </p>
        </Layout>
    )
}

export default Home