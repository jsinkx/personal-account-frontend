import axios from 'axios'

import { API_URL } from '@shared/constants'

import detectBrowserInfo from '@utils/detect-browser-info'

const axiosInstance = axios.create({ baseURL: API_URL })

axiosInstance.interceptors.request.use((config) => {
	const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token')
	const { browserName, fullVersion } = detectBrowserInfo()

	config.headers.Authorization = token
	config.headers.browser = `${browserName} ${fullVersion}`

	return config
})

export default axiosInstance
