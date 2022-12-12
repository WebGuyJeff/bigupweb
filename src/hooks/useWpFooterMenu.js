import { graphql, useStaticQuery } from 'gatsby'

const useWpFooterMenu = () => {
	const {
		wpMenu: { menuItems },
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
	return menuItems
}

export default useWpFooterMenu