import styled from 'styled-components'

const StyledSettingsPage = styled.div`
	height: 80%;
	margin-top: 40px;
	margin-left: 75px;
	margin-right: 60px;
	display: flex;
	border: 1px solid #e0e1e3; // FIX
	background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
	box-sizing: border-box;

	nav {
		width: 200px;
		height: 100%;
		padding: 20px 30px;
		border-right: 1px solid #e0e1e3; // FIX
		box-sizing: border-box;

		ul {
			margin: 0;
			padding: 0;
			list-style: none;

			li {
				margin-bottom: 30px;
				font-size: 1.15em;
			}
		}
	}

	.settings__content {
		padding: 20px 30px;

		h2 {
			margin-top: 0;
			margin-bottom: 40px;
			font-size: 1.5em;
			user-select: none;
		}

		.settings__content__group__name,
		.settings__content__group__account,
		.settings__content__group__other {
			margin-bottom: 40px;
			display: flex;
		}

		.settings__content__group__other {
			flex-direction: column;
		}
	}
`

export default StyledSettingsPage
