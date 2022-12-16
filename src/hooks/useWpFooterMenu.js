import { graphql, useStaticQuery } from 'gatsby'

const noWpBinnedPages = ( menuNodes ) => {
	let footerLinks = []
	const regex     = new RegExp( /^\/\?/ )
	menuNodes.map( ( node ) => {
		if ( false === !! regex.test( node.uri ) ) {
			footerLinks.push( node )
		}
	} )
	return footerLinks
}

const useWpFooterMenu = () => {
	const {
		wpMenu: { menuItems: { nodes } },
	} = useStaticQuery( graphql`
		query {
			wpMenu(id: {eq: "dGVybToxNzM="}) {
				menuItems {
					nodes {
						uri
						label
					}
				}
			}
		}
	` )
	return noWpBinnedPages( nodes )
}

export default useWpFooterMenu