# Bigup Web

A website for bigupweb.uk

## Styles

We are using SCSS Modules because I don't like defining HTML elements in the style files - I'd rather keep styles and markup separate. Also, CSS Modules generates a real CSS file, not a dump in the head like Styled Components.

One drawback to CSS Modules, is the incompatibility with underscores making my vanilla BEM syntax impossible. :(

## NPM Bug

For a reason I can't work out, NPM hangs when trying to fetch "@pasdo501/gatsby-source-woocommerce".

[package.json]
"dependencies": {
	"@pasdo501/gatsby-source-woocommerce": "^0.15.1",
	...

For now, I've pulled Woo support because there's little to no docs online and I don't have time.