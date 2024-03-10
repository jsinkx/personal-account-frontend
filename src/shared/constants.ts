// eslint-disable-next-line import/no-unresolved
import { version } from '../../package.json'

// API

export const API_URL = import.meta.env.VITE_API_URL
export const CDN_URL = import.meta.env.VITE_CDN_URL

export const CDN_STATIC_IMG = `${CDN_URL}/assets/static/images`
export const ICON_LOGO_URL = `${CDN_STATIC_IMG}/wish-edu-blue-round-box-logo.webp`

// Other

export const CLIENT_URL = `${window.location.protocol}//${window.location.host}`

export const IS_PROD = import.meta.env.PROD
export const IS_BETA = import.meta.env.VITE_IS_BETA

export const APP_VERSION = `${IS_BETA ? 'Beta' : ''}  ${version}`
