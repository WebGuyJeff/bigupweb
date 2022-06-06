import React from "react"
import { Img } from "gatsby"



/**
 * @link https://stackoverflow.com/questions/57202686/how-to-replace-html-images-with-gatsbyjs-responsive-images
 */
export const ParsePostContentHTML = dataContent => {

    let indexKeyImg = 234;

    const ParsedHTML = Parse( dataContent, {
        replace: function( domNode ) {
            if( domNode.name === 'img' ) {

                const fluidImg = data.allWordpressWpMedia.edges.filter(media => {
                    return media.node.source_url === domNode.attribs.src
                })

                if(fluidImg.length > 0) {
                    let srcMedia = (fluidImg[0].node.localFile.childImageSharp)
                        ? fluidImg[0].node.localFile.childImageSharp.fluid
                        : fluidImg[0].node.localFile.publicURL

                    indexKeyImg++

                    if(fluidImg[0].node.localFile.childImageSharp) {
                        return (
                            <Img
                                key={indexKeyImg}
                                fluid={srcMedia}
                                className={`${domNode.attribs.class} gatsby-rendered-img`}
                                alt={fluidImg[0].node.alt_text}
                            />
                        )
                    } else {
                        return (
                            <img
                                key={indexKeyImg}
                                src={srcMedia}
                                className={`${domNode.attribs.class} gatsby-rendered-img`}
                                alt={fluidImg[0].node.alt_text}
                            />
                        )
                    }
                }
            }
        }
    })

    return ParsedHTML
}