import Colors from '@shared/colors'

import ThemesStyledComponents from './theme-styled-components'

const ThemeStyledComponentsDark = {
	paletteName: ThemesStyledComponents.DARK,

	app: {
		defaultFontColor: Colors.WHITE,
		defaultBackgroundColor: Colors.BLACK,
	},

	element: {
		defaultBoxShadow: 'rgba(0, 0, 0, 0.1)',
		defaultBackgroundColor: Colors.GREY_BACKGROUND_COLOR,

		primaryBackgroundColor: Colors.BLUE_WISH,

		inactiveBorderColor: Colors.INACTIVE_LIGHT_GREY_BORDER,

		errorBackgroundColor: Colors.SUPER_LIGHT_ERROR_RED_BACKGROUND,

		elementBoxShadow: 'rgba(0, 0, 0, 0.12)',
	},

	text: {
		defaultFontColor: Colors.WHITE,

		primaryFontColor: Colors.BLUE_WISH,

		inactiveFontColor: Colors.INACTIVE_LIGHT_GREY_BORDER,
		secondFontColor: Colors.SECOND_GREY_FONT,

		errorFontColor: Colors.LIGHT_ERROR_RED_BORDER,

		defaultFontFamily: `-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue'`,
	},

	selection: {
		defaultFontColor: Colors.WHITE,
		defaultBackgroundColor: Colors.BLUE_WISH,

		errorFontColor: Colors.BLACK,
		errorBackgroundColor: Colors.LIGHT_ERROR_RED_BORDER,
	},
} as const

export default ThemeStyledComponentsDark
