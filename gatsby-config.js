/**
 * Gatsby Configuration.
 *
 * @link https://www.gatsbyjs.org/docs/gatsby-config/
 */

require( 'dotenv' ).config( {
	path: '.env.development',
} )

module.exports = {
	trailingSlash: false,
	siteMetadata: {
		title: 'Bigup Web',
		siteUrl: 'https://bigupweb.uk',
		description: 'Exciting, Bold, and Downright Different Web Development',
		author: 'Jefferson Real',
		twitterUsername: 'bigupweb',
		facebookUsername: 'bigupweb',
		instagramUsername: 'bigupweb',
		linkedinUsername: 'bigupweb',
		image: '/static/logo/bigup-web-logo-wide.png',
		developerName: 'Jefferson Real',
		developerUrl: 'https://jeffersonreal.uk',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: `${__dirname}/content/assets`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
		},
		{
			// See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Bigup Web',
				short_name: 'Bigup Web',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#e90080',
				display: 'minimal-ui',
				icon: 'content/assets/bigupweb-icon.png',
			},
		},	
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: process.env.WP_GRAPHQL_ENDPOINT_URL,
				auth: {
					// Only required if your WordPress site is behind Basic Auth.
					htaccess: {
						username: process.env.HTTPBASICAUTH_USERNAME,
						password: process.env.HTTPBASICAUTH_PASSWORD,
					}
				},
				verbose: true,
				/*
				searchAndReplace: [
					{
					// This is a regex search and replace rule to find any occurances of the
						// WordPress source URL and replace it with the URL of the Gatsby site.
						search: process.env.WP_SOURCE_BASE_URL,
						replace: process.env.GATSBY_WEBSITE_URL,
					},
				],
				*/
				html: {
					useGatsbyImage: true,
					imageQuality: 90,
					createStaticFiles: true,
					generateWebpImages: true,
					placeholderType: 'blurred',
				},
				debug: {
					graphql: {
						writeQueriesToDisk: true,
						showQueryOnError: true,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-htaccess',
			options: {
				RewriteBase: '/',
				https: true,
				www: false,
				host: 'bigupweb.uk', // if 'www' is set to 'false', be sure to also remove it here!
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: process.env.GATSBY_WEBSITE_URL,
				sitemap: process.env.GATSBY_SITEMAP_URL,
				policy: [ { userAgent: '*', allow: '/' } ],
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			cssLoaderOptions: {
				camelCase: true,
			},
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en'
			}
		}
	]
}