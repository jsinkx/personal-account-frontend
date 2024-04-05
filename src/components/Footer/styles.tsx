import styled from 'styled-components'

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 55px;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
	box-shadow: 0 -1px 0 ${({ theme }) => theme.element.defaultBoxShadow};
	box-sizing: border-box;
	user-select: none;
	flex: 0 0 auto;

	p {
		color: ${({ theme }) => theme.text.inactiveFontColor};
		font-weight: 500;
	}

	nav {
		ul {
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			list-style: none;
			box-sizing: border-box;

			li {
				margin-left: 40px;
				font-size: 1em;
				font-weight: 500;
			}
		}
	}

	@media (max-width: 686px) {
		font-size: 0.8em;
	}

	@media (max-width: 590px) {
		flex-direction: column;
		font-size: 0.9em;

		p {
			margin: 5px auto;
		}

		ul {
			flex-direction: column;

			li {
				margin-bottom: 5px;
				margin-left: 0 !important;
			}
		}
	}
`

export default StyledFooter
