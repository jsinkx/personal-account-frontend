import Colors from '@shared/colors'
import { CLOUD_STATIC_IMG } from '@shared/constants'

const NAVIGATION_SERVICES = [
	{
		title: 'ВИШ',
		color: Colors.BLUE_WISH,
		iconUrl: `${CLOUD_STATIC_IMG}/vish-logo.png`,
		url: 'https://wish.rut.digital/',
		isDisabled: false,
	},
	{
		title: 'Биржа проектов',
		color: Colors.ORANGE,
		iconUrl: '',
		url: '',
		isDisabled: true,
	},
	{
		title: 'МФЦ РУТ МИИТ',
		color: Colors.CYAN,
		iconUrl: `${CLOUD_STATIC_IMG}/rut-miit-logo.jpg`,
		url: 'https://t.me/miit_mfc_bot',
		isDisabled: false,
	},
]

export default NAVIGATION_SERVICES
