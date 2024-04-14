import styled from 'styled-components'

const StyledTooltip = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	position: relative;

	.tooltip__show-box {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		padding: 0.5em;
		border-radius: 5px;
		z-index: 999;
		user-select: none;
	}
`

export default StyledTooltip
