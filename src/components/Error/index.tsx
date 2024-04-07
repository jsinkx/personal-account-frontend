import React from 'react'

import { Alert, AlertProps } from '@mui/material'

type ErrorProps = {} & AlertProps

const Error: React.FC<ErrorProps> = ({ children, ...props }) => {
	return (
		<Alert severity="error" {...props}>
			{children}
		</Alert>
	)
}

export default Error
