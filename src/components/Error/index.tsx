import React from 'react'

import StyledError from './styles'

type ErrorProps = {} & React.ComponentPropsWithoutRef<'div'>

const Error: React.FC<ErrorProps> = ({ children }) => {
	return <StyledError>{children}</StyledError>
}

export default Error
