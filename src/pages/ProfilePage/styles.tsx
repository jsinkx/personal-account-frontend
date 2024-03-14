import styled from 'styled-components'

type StyledProfileProps = {
	$color: string
}

const StyledProfile = styled.div<StyledProfileProps>`
	section {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		.profile__background {
			width: 100%;
			height: 200px;
			margin-bottom: 50px;
			background-color: ${({ $color }) => $color};
		}

		.profile__avatar {
			width: 100px;
			height: 100px;

			span {
				font-size: 3em;
			}
		}

		h3 {
			font-size: 2em;
			font-weight: 400;
		}
	}
`

export default StyledProfile
