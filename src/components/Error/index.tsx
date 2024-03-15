import React from 'react'

import StyledError from './styles'

type ErrorProps = {} & React.ComponentPropsWithRef<'div'>

const Error: React.FC<ErrorProps> = ({ children, ...props }) => {
	return <StyledError {...props}>{children}</StyledError>
}

export default Error
