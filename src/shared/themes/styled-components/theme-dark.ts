import Colors from '@shared/colors'

import ThemesStyledComponents from './theme-styled-components'
import ThemeStyledComponents from './types'

const ThemeStyledComponentsDark: ThemeStyledComponents = {
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

		errorFontColor: Colors.RED,

		successFontColor: Colors.GREEN_ONLINE,

		defaultFontFamily: `-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue'`,
	},

	icon: {
		defaultColor: Colors.WHITE,
	},

	selection: {
		defaultFontColor: Colors.WHITE,
		defaultBackgroundColor: Colors.BLUE_WISH,

		errorFontColor: Colors.BLACK,
		errorBackgroundColor: Colors.LIGHT_ERROR_RED_BORDER,
	},

	scrollbar: {
		defaultTrackColor: Colors.GREY_BACKGROUND_COLOR,
		defaultThumbColor: Colors.BLUE_WISH,
	},

	components: {
		auth: {
			backgroundColor: 'rgba(39, 39, 39, 0.6)',
		},

		input: {
			placeholderColor: Colors.INACTIVE_GREY_FONT,
		},
	},
}

export default ThemeStyledComponentsDark
