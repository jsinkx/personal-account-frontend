const Paths = {
	home: '/',
	about: '/about',
	contact: '/contact',
	termsAndConditions: '/terms&conditions',
	registration: '/registration',
	login: '/login',
	profile: {
		static: '/profile/:id',
		dynamic(id: number) {
			return `/profile/${id}`
		},
	},
	any: '*',
	maintenanceService: '/maintenance-service', // TODO: take it out in index.html on backend server
} as const

export default Paths
