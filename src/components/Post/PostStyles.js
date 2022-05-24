import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemsStyles = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: calc(var(--gap) / 2);

	@media (min-width: 1200px) {
		gap: var(--gap);
	}

	@media (min-width: 1200px) {
		gap: var(--gap);
	}
`

export const PostItemStyles = styled(Link)`
	display: flex;
	position: relative;
	flex: 0 0 100%;
	flex-direction: column;
	border: 2px solid rgba(255, 255, 255, 0.15);
	border-radius: 6px;
	overflow: hidden;
	text-decoration: none;
	color: #fff;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	transition: border-color 0.6s ease, background-color 0.6s ease,
		box-shadow 0.6s ease;

	&:first-child {
		margin-top: 0;
	}

	@media (min-width: 768px) {
		flex-basis: calc(50% - 20px);
	}

	@media (min-width: 1024px) {
		flex-basis: calc(33.333% - 27px);
		min-height: 450px;
	}

	@media (min-width: 1200px) {
		width: calc(33.333% - 54px);
	}

	.blogitem__img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.blogitem__content {
		margin-top: auto;
		z-index: 2;
		width: 100%;
		background: linear-gradient(6deg, #000c 22%, transparent 85%);

		@media (min-width: 768px) {
			padding: 20px;
		}

		@media (min-width: 1024px) {
			padding: 40px 20px;
		}

		@media (min-width: 1200px) {
			padding: 50px 30px;
		}

		h4,
		p {
			text-shadow: var(--textShadow);
		}

		p {
			font-size: var(--p);
		}

		> p {
			margin-bottom: var(--gap);
		}

		a {
			text-decoration: none;
			color: #fff;
		}

		.blogitem__meta {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: calc(var(--gap) / 2);
			margin-top: auto;

			p {
				color: #777;
				font-weight: 700;
				font-size: 16px;
			}

			> * {
				&:first-child {
					margin-top: 0;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	&:hover {
		color: #fff;
		border-color: var(--primary);
		background-color: #151515;
		box-shadow: var(--boxShadow);

		.blogitem__img {
			transform: scale(1.1);
			opacity: 0.5;
		}
	}
`

export const PostSingleStyles = styled.article`
	padding: var(--sectionMargin) var(--borderSpacing) 0 var(--borderSpacing);
	max-width: 750px;
	margin: 0 auto;
	box-sizing: content-box;

	.blogsingle {
		&__title {
			font-size: var(--h2);
			font-weight: 700;
		}

		&__content {
			border-top: 2px solid var(--primary);
			padding-top: calc(var(--gap));
		}

		&__back {
			padding-top: var(--gap);
		}
	}
`
