import Colors from '@shared/colors'

import createTheme from '@mui/material/styles/createTheme'

const themeMUI = createTheme({
	typography: {
		fontFamily: `'Segoe UI', sans-serif, 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`,
	},
	palette: {
		mode: 'light',
		primary: {
			main: Colors.BLUE_WISH,
		},
		error: {
			main: Colors.RED,
		},
		success: {
			main: Colors.GREEN_ONLINE,
		},
	},
})

export default themeMUI
