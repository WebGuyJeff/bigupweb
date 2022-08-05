import React from "react"
import WooFeaturedProduct from "../Features/WooFeaturedProduct"
import useAllWooProduct from "../../hooks/useWooAllProducts"

const ProductFeed = () => {
	const allProduct = useAllWooProduct()

	return allProduct.map((node, index) => {
		return <WooFeaturedProduct key={index} feature={node} />
	})
}

export default ProductFeed
