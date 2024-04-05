import Colors from '@shared/colors'

import ThemesStyledComponents from './theme-styled-components'

const ThemeStyledComponentsLight = {
	paletteName: ThemesStyledComponents.LIGHT,
	app: {
		defaultFontColor: Colors.BLACK,
		defaultBackgroundColor: Colors.WHITE_BACKGROUND_COLOR,
	},

	element: {
		defaultBoxShadow: 'rgba(0, 0, 0, 0.1)',
		defaultBackgroundColor: Colors.WHITE,

		primaryBackgroundColor: Colors.BLUE_WISH,

		inactiveBorderColor: Colors.INACTIVE_GREY_FONT,

		errorBackgroundColor: Colors.SUPER_LIGHT_ERROR_RED_BACKGROUND,

		elementBoxShadow: 'rgba(0, 0, 0, 0.12)',
	},

	text: {
		defaultFontColor: Colors.BLACK,

		primaryFontColor: Colors.BLUE_WISH,

		inactiveFontColor: Colors.INACTIVE_GREY_FONT,
		secondFontColor: Colors.SECOND_GREY_FONT,

		errorFontColor: Colors.LIGHT_ERROR_RED_BORDER,

		defaultFontFamily: `-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue'`,
	},

	selection: {
		defaultFontColor: Colors.BLACK,
		defaultBackgroundColor: Colors.BLUE_WISH,

		errorFontColor: Colors.BLACK,
		errorBackgroundColor: Colors.LIGHT_ERROR_RED_BORDER,
	},
} as const

export default ThemeStyledComponentsLight
