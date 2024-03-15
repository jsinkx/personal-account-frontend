import axios from 'axios'

import detectBrowserInfo from '../utils/detect-browser-info'

import { API_URL } from './constants'

const instance = axios.create({ baseURL: API_URL })

instance.interceptors.request.use((config) => {
	const { browserName, fullVersion } = detectBrowserInfo()

	config.headers.Authorization = window.localStorage.getItem('token')
	config.headers.browser = `${browserName} ${fullVersion}`

	return config
})

export default instance
