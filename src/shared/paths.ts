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
		dynamic(id: number) {
			return `/profile/${id}`
		},
		children: {
			aboutMe: '',
			wall: 'wall',
			portfolio: 'portfolio',
		},
	},
	settings: '/settings',
	any: '*',
	maintenanceService: '/maintenance-service', // TODO: take it out in index.html on backend server
} as const

export default Paths
