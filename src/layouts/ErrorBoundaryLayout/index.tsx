import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

import NotFoundPage from '@pages/NotFoundPage'

const ErrorBoundaryLayout = () => (
	<ErrorBoundary FallbackComponent={NotFoundPage}>
		<Outlet />
	</ErrorBoundary>
)

export default ErrorBoundaryLayout
