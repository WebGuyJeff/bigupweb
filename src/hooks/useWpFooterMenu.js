import { graphql, useStaticQuery } from 'gatsby'

const useWpFooterMenu = () => {
	const { menu } = useStaticQuery( graphql`
		wpMenu(name: {eq: "footerLinks"}) {
			menuItems {
				nodes {
					uri
					label
				}
			}
		}
	` )
	return menu.menuItems
}

export default useWpFooterMenu