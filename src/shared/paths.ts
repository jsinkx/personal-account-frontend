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
	settings: '/settings',
	any: '*',
	maintenanceService: '/maintenance-service',
} as const

export default Paths
