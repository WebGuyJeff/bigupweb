import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"
import PropTypes from 'prop-types'

const Button = ({ text, to, as, arrow }) => {
	return (
		<ButtonStyles className="btn" as={as} to={to}>
			{text}
			{arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
		</ButtonStyles>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	as: PropTypes.string,
	arrow: PropTypes.bool,
}

export default Button
