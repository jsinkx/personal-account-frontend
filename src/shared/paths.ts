const Paths = {
	home: '/',
	about: '/about',
	contacts: '/contacts',
	termsAndConditions: '/terms&conditions',
	vacancy: '/vacancy',
	apiDocumentation: '/api-documentation',
	registration: '/registration',
	login: '/login',
	forgotPassword: '/forgot-password',
	users: '/users',
	profile: {
		static: '/profile/:id',
		dynamic(id: number | string) {
			return `/profile/${id}`
		},
		children: {
			default: '',
			aboutMe: 'about-me',
			wall: 'wall',
			portfolio: 'portfolio',
		},
	},
	settings: {
		static: '/settings',
		children: {
			default: '',
			account: 'account',
			password: 'password',
			app: 'app',
			notifications: 'notifications',
			help: 'help',
		},
	},
	any: '*',
	maintenanceService: '/maintenance-service',
} as const

export default Paths
