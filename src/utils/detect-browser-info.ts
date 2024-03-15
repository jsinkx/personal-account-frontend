const detectBrowserInfo = () => {
	/* eslint-disable no-cond-assign */
	const appVersion: string = navigator.appVersion
	const userAgent: string = navigator.userAgent
	let browserName: string = navigator.appName
	let fullVersion: string = `${parseFloat(navigator.appVersion)}`
	let majorVersion: number = parseInt(navigator.appVersion, 10)
	let nameOffset: number | undefined
	let verOffset: number | undefined
	let ix: number | undefined

	// In Opera, the true version is after "OPR" or after "Version"
	if ((verOffset = userAgent.indexOf('OPR')) !== -1) {
		browserName = 'Opera'
		fullVersion = userAgent.substring(verOffset + 4)
		if ((verOffset = userAgent.indexOf('Version')) !== -1) {
			fullVersion = userAgent.substring(verOffset + 8)
		}
	}
	// In MS Edge, the true version is after "Edg" in userAgent
	else if ((verOffset = userAgent.indexOf('Edg')) !== -1) {
		browserName = 'Microsoft Edge'
		fullVersion = userAgent.substring(verOffset + 4)
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset = userAgent.indexOf('MSIE')) !== -1) {
		browserName = 'Microsoft Internet Explorer'
		fullVersion = userAgent.substring(verOffset + 5)
	}
	// In Chrome, the true version is after "Chrome"
	else if ((verOffset = userAgent.indexOf('Chrome')) !== -1) {
		browserName = 'Chrome'
		fullVersion = userAgent.substring(verOffset + 7)
	}
	// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset = userAgent.indexOf('Safari')) !== -1) {
		browserName = 'Safari'
		fullVersion = userAgent.substring(verOffset + 7)
		if ((verOffset = userAgent.indexOf('Version')) !== -1) {
			fullVersion = userAgent.substring(verOffset + 8)
		}
	}
	// In Firefox, the true version is after "Firefox"
	else if ((verOffset = userAgent.indexOf('Firefox')) !== -1) {
		browserName = 'Firefox'
		fullVersion = userAgent.substring(verOffset + 8)
	}
	// In most other browsers, "name/version" is at the end of userAgent
	else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {
		browserName = userAgent.substring(nameOffset, verOffset)
		fullVersion = userAgent.substring(verOffset + 1)
		if (browserName.toLowerCase() === browserName.toUpperCase()) {
			browserName = navigator.appName
		}
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix = fullVersion.indexOf(';')) !== -1) {
		fullVersion = fullVersion.substring(0, ix)
	}
	if ((ix = fullVersion.indexOf(' ')) !== -1) {
		fullVersion = fullVersion.substring(0, ix)
	}

	majorVersion = parseInt(`${fullVersion}`, 10)
	if (Number.isNaN(majorVersion)) {
		fullVersion = `${parseFloat(navigator.appVersion)}`
		majorVersion = parseInt(navigator.appVersion, 10)
	}

	return {
		browserName,
		fullVersion,
		majorVersion,
		appVersion,
		userAgent,
	}
}

export default detectBrowserInfo
