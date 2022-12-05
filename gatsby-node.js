/* Haven't gottent this Webpack config to work yet - Jeff */
exports.onCreateWebpackConfig = ( {
	actions
} ) => {
	actions.setWebpackConfig( {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [ 'style-loader', 'css-loader' ]
				},
			],
		}
	} )
}