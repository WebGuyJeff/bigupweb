const React = require( 'react' )

const HtmlAttributes = {
	lang: 'en'
}

exports.onRenderBody = ( {
	setHtmlAttributes
}, pluginOptions ) => {
	setHtmlAttributes( HtmlAttributes )
}