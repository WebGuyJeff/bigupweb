// Import React so that you can use JSX in HeadComponents
const React = require( "react" )

const HtmlAttributes = {
	lang: "en"
}

const HeadComponents = [
	<link key="apple-57" rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />,
	<link key="apple-114" rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />,
	<link key="apple-72" rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />,
	<link key="apple-144" rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />,
	<link key="apple-60" rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />,
	<link key="apple-120" rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />,
	<link key="apple-76" rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />,
	<link key="apple-152" rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />,
	<link key="favicon-196" rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />,
	<link key="favicon-96" rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />,
	<link key="favicon-32" rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />,
	<link key="favicon-16" rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />,
	<link key="favicon-128" rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />,
	<meta key="app-name" name="application-name" content="Bigup Web"/>,
	<meta key="ms-colour" name="msapplication-TileColor" content="#FFFFFF" />,
	<meta key="ms-img" name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />,
	<meta key="ms-70" name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />,
	<meta key="ms-150" name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />,
	<meta key="ms-310x150" name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />,
	<meta key="ms-310" name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />
]

exports.onRenderBody = ( {
	setHeadComponents,
	setHtmlAttributes
}, pluginOptions) => {
	setHtmlAttributes( HtmlAttributes )
	setHeadComponents( HeadComponents )
}
