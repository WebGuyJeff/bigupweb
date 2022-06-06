import * as React from 'react'
import PropTypes from "prop-types"
import {   
    container,
	main,
    heading
} from './Layout.module.scss'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import parse from "html-react-parser"

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={container}>
            <Header />
            <main className={main}>
                {pageTitle && 
					<h1 className={heading}>{parse(pageTitle)}</h1>
				}
                {children}
            </main>
			<Footer />
        </div>
    )
}

Layout.propTypes = {
	pageTitle: PropTypes.PropTypes.string,
	children: PropTypes.PropTypes.node.isRequired
}

export default Layout