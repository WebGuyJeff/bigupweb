module.exports = {
    siteMetadata: {
      title: `Bigup Web`,
      description: `Exciting, Bold, and Downright Different Web Development`
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-plugin-htaccess',
			options: {
				RewriteBase: '/',
				https: true,
				www: false,
				host: 'bigupweb.uk', // if 'www' is set to 'false', be sure to also remove it here!
			},
		},
    ],
}